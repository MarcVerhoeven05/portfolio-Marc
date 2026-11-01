import http from 'http';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = 3335;

const PROJECTS = {
  5: {
    outputDir: path.join(__dirname, 'public', 'images', 'project-5'),
    files: [
      { name: 'foto-1', pdfPath: path.join(__dirname, 'Project 5 foto 1.pdf') },
      { name: 'foto-2', pdfPath: path.join(__dirname, 'Project 5 foto 2.pdf') },
      { name: 'foto-3', pdfPath: path.join(__dirname, 'Project 5 foto 3.pdf') },
      { name: 'foto-4', pdfPath: path.join(__dirname, 'Project 5 foto 4.pdf') },
      { name: 'foto-5', pdfPath: path.join(__dirname, 'Project 5 foto 5.pdf') },
    ]
  }
};

// Collect all files
const allFiles = [];
for (const [projectNum, data] of Object.entries(PROJECTS)) {
  for (const f of data.files) {
    allFiles.push({ ...f, outputDir: data.outputDir, projectNum });
  }
}

let savedCount = 0;
const totalFiles = allFiles.length;
const pendingFiles = new Map(); // name -> { outputDir, pdfPath }

for (const f of allFiles) {
  pendingFiles.set(f.name + '_p' + f.projectNum, f);
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve the PDF.js converter page
    const filesJson = JSON.stringify(allFiles.map(f => ({
      name: f.name + '_p' + f.projectNum,
      pdfUrl: `http://localhost:${PORT}/pdf/${f.name}_p${f.projectNum}`
    })));
    
    const html = `<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs" type="module"></script>
<style>
* { margin: 0; padding: 0; }
body { background: #fff; }
canvas { display: block; }
</style>
</head>
<body>
<div id="status">Starting...</div>
<canvas id="canvas"></canvas>
<script type="module">
import * as pdfjsLib from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs';

const files = ${filesJson};
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const status = document.getElementById('status');

async function convertFile(fileInfo) {
  status.textContent = 'Converting ' + fileInfo.name + '...';
  const resp = await fetch('/pdf/' + fileInfo.name);
  const arrayBuffer = await resp.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 2.0 });
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  await page.render({ canvasContext: ctx, viewport }).promise;
  const dataUrl = canvas.toDataURL('image/png', 0.95);
  const base64 = dataUrl.split(',')[1];
  await fetch('/save/' + fileInfo.name, { method: 'POST', body: base64, headers: { 'Content-Type': 'text/plain' } });
  status.textContent = 'Saved ' + fileInfo.name;
}

async function run() {
  for (const f of files) {
    await convertFile(f);
  }
  status.textContent = 'ALL DONE!';
  await fetch('/done');
}
run().catch(e => { status.textContent = 'ERROR: ' + e.message; fetch('/error?msg=' + encodeURIComponent(e.message)); });
</script>
</body>
</html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);

  } else if (req.url.startsWith('/pdf/')) {
    const key = req.url.replace('/pdf/', '');
    const fileInfo = pendingFiles.get(key);
    if (fileInfo && fs.existsSync(fileInfo.pdfPath)) {
      const data = fs.readFileSync(fileInfo.pdfPath);
      res.writeHead(200, { 'Content-Type': 'application/pdf', 'Access-Control-Allow-Origin': '*' });
      res.end(data);
    } else {
      res.writeHead(404);
      res.end('not found: ' + key);
    }

  } else if (req.url.startsWith('/save/')) {
    const key = req.url.replace('/save/', '');
    const fileInfo = pendingFiles.get(key);
    let body = '';
    req.on('data', d => body += d);
    req.on('end', () => {
      if (fileInfo) {
        const outputPath = path.join(fileInfo.outputDir, `${fileInfo.name}.png`);
        const buf = Buffer.from(body, 'base64');
        fs.writeFileSync(outputPath, buf);
        savedCount++;
        console.log(`Saved (${savedCount}/${totalFiles}): ${outputPath} (${Math.round(buf.length/1024)}KB)`);
      }
      res.writeHead(200);
      res.end('ok');
    });

  } else if (req.url === '/done') {
    console.log('All conversions complete!');
    res.writeHead(200);
    res.end('done');
    setTimeout(() => server.close(), 500);

  } else if (req.url.startsWith('/error')) {
    const msg = new URL(req.url, `http://localhost:${PORT}`).searchParams.get('msg');
    console.error('Browser error:', msg);
    res.writeHead(200);
    res.end('ok');
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Opening Edge to convert PDFs via PDF.js...');
  
  const cmd = `"${EDGE_PATH}" --headless --disable-gpu --no-sandbox --run-all-compositor-stages-before-draw --virtual-time-budget=120000 "http://localhost:${PORT}/"`;
  exec(cmd, { timeout: 180000 }, (err, stdout, stderr) => {
    if (err) console.log('Edge finished (may be normal):', err.code);
    if (savedCount < totalFiles) {
      console.log(`Only ${savedCount}/${totalFiles} files saved. Server still running...`);
    }
  });
  
  // Timeout fallback
  setTimeout(() => {
    console.log(`Timeout reached. ${savedCount}/${totalFiles} files saved.`);
    server.close();
    process.exit(savedCount > 0 ? 0 : 1);
  }, 60000);
});

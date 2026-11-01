import http from 'http';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = 3336;

const PDFJSLIB = path.join(__dirname, 'node_modules', 'pdfjs-dist', 'build', 'pdf.min.mjs');
const PDFJSWORKER = path.join(__dirname, 'node_modules', 'pdfjs-dist', 'build', 'pdf.worker.min.mjs');

const PROJECTS = [
  {
    projectNum: 5,
    outputDir: path.join(__dirname, 'public', 'images', 'project-5'),
    files: [
      { name: 'foto-1', pdfPath: path.join(__dirname, 'Project 5 foto 1.pdf') },
      { name: 'foto-2', pdfPath: path.join(__dirname, 'Project 5 foto 2.pdf') },
      { name: 'foto-3', pdfPath: path.join(__dirname, 'Project 5 foto 3.pdf') },
      { name: 'foto-4', pdfPath: path.join(__dirname, 'Project 5 foto 4.pdf') },
      { name: 'foto-5', pdfPath: path.join(__dirname, 'Project 5 foto 5.pdf') },
    ]
  }
];

// Build a flat file list
const allFiles = [];
const fileMap = {};
for (const proj of PROJECTS) {
  for (const f of proj.files) {
    const key = `p${proj.projectNum}_${f.name}`;
    allFiles.push({ key, outputDir: proj.outputDir, ...f });
    fileMap[key] = { key, outputDir: proj.outputDir, ...f };
  }
}

let savedCount = 0;
const totalFiles = allFiles.length;

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimes = { '.mjs': 'application/javascript', '.js': 'application/javascript', '.pdf': 'application/pdf' };
  return mimes[ext] || 'application/octet-stream';
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');

  if (req.url === '/') {
    const filesJson = JSON.stringify(allFiles.map(f => ({ key: f.key, name: f.name })));
    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script type="importmap">
{
  "imports": {
    "pdfjs-dist": "http://localhost:${PORT}/pdfjs/pdf.min.mjs"
  }
}
</script>
</head>
<body>
<div id="status">Starting...</div>
<canvas id="canvas"></canvas>
<script type="module">
import * as pdfjsLib from 'http://localhost:${PORT}/pdfjs/pdf.min.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'http://localhost:${PORT}/pdfjs/pdf.worker.min.mjs';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const status = document.getElementById('status');
const files = ${filesJson};

async function convertFile(fileInfo) {
  status.textContent = 'Loading PDF: ' + fileInfo.name;
  const resp = await fetch('/pdf/' + fileInfo.key);
  if (!resp.ok) throw new Error('Failed to fetch PDF: ' + fileInfo.key);
  const arrayBuffer = await resp.arrayBuffer();
  status.textContent = 'Rendering: ' + fileInfo.name;
  const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 2.0 });
  canvas.width = Math.round(viewport.width);
  canvas.height = Math.round(viewport.height);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: ctx, viewport }).promise;
  status.textContent = 'Saving: ' + fileInfo.name;
  const dataUrl = canvas.toDataURL('image/png', 0.92);
  const base64 = dataUrl.split(',')[1];
  const saveResp = await fetch('/save/' + fileInfo.key, {
    method: 'POST',
    body: base64,
    headers: { 'Content-Type': 'text/plain' }
  });
  if (!saveResp.ok) throw new Error('Save failed for ' + fileInfo.key);
  status.textContent = 'Saved: ' + fileInfo.name;
}

async function run() {
  for (const f of files) {
    try {
      await convertFile(f);
    } catch (e) {
      console.error('Error on', f.key, e);
      await fetch('/error?key=' + f.key + '&msg=' + encodeURIComponent(e.message));
    }
  }
  status.textContent = 'ALL DONE';
  await fetch('/done');
}

run().catch(e => {
  status.textContent = 'FATAL: ' + e.message;
  fetch('/error?key=FATAL&msg=' + encodeURIComponent(e.message));
});
</script>
</body>
</html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);

  } else if (req.url === '/pdfjs/pdf.min.mjs') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(fs.readFileSync(PDFJSLIB));
  } else if (req.url === '/pdfjs/pdf.worker.min.mjs') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(fs.readFileSync(PDFJSWORKER));

  } else if (req.url.startsWith('/pdf/')) {
    const key = req.url.replace('/pdf/', '').split('?')[0];
    const fileInfo = fileMap[key];
    if (fileInfo && fs.existsSync(fileInfo.pdfPath)) {
      const data = fs.readFileSync(fileInfo.pdfPath);
      res.writeHead(200, { 'Content-Type': 'application/pdf' });
      res.end(data);
    } else {
      res.writeHead(404);
      res.end('PDF not found: ' + key);
    }

  } else if (req.url.startsWith('/save/')) {
    const key = req.url.replace('/save/', '').split('?')[0];
    const fileInfo = fileMap[key];
    let body = '';
    req.on('data', d => body += d);
    req.on('end', () => {
      if (fileInfo) {
        const outputPath = path.join(fileInfo.outputDir, `${fileInfo.name}.png`);
        fs.mkdirSync(fileInfo.outputDir, { recursive: true });
        const buf = Buffer.from(body, 'base64');
        fs.writeFileSync(outputPath, buf);
        savedCount++;
        console.log(`[${savedCount}/${totalFiles}] Saved: ${fileInfo.name}.png (${Math.round(buf.length/1024)}KB)`);
      }
      res.writeHead(200);
      res.end('ok');
    });

  } else if (req.url === '/done') {
    console.log(`Conversion complete! ${savedCount}/${totalFiles} files saved.`);
    res.writeHead(200);
    res.end('done');
    setTimeout(() => { server.close(); process.exit(0); }, 1000);

  } else if (req.url.startsWith('/error')) {
    const urlObj = new URL(req.url, `http://localhost:${PORT}`);
    console.error(`Error [${urlObj.searchParams.get('key')}]: ${urlObj.searchParams.get('msg')}`);
    res.writeHead(200);
    res.end('ok');
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
  console.log(`Converting ${totalFiles} PDFs for ${PROJECTS.length} project(s)...`);
  
  // Run headless Edge WITHOUT virtual-time-budget (let real time pass for PDF loading)
  const edgeCmd = `"${EDGE_PATH}" --headless=new --disable-gpu --no-sandbox --disable-web-security --allow-running-insecure-content --window-size=2560,1440 "http://localhost:${PORT}/"`;
  
  console.log('Launching headless Edge...');
  const child = exec(edgeCmd, { timeout: 300000 }, (err, stdout, stderr) => {
    if (err && err.code !== null) console.log('Edge exited:', err.code);
  });

  // Timeout: if not done in 3 minutes, give up
  const timeout = setTimeout(() => {
    console.log(`Timeout! Only ${savedCount}/${totalFiles} files converted.`);
    child.kill();
    server.close();
    process.exit(savedCount === totalFiles ? 0 : 1);
  }, 180000);

  server.on('close', () => clearTimeout(timeout));
});

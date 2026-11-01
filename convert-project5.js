import http from 'http';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUTPUT_DIR = path.join(__dirname, 'public', 'images', 'project-5');
const PORT = 3334;

const pdfFiles = [
  { name: 'foto-1', file: path.join(__dirname, 'Project 5 foto 1.pdf') },
  { name: 'foto-2', file: path.join(__dirname, 'Project 5 foto 2.pdf') },
  { name: 'foto-3', file: path.join(__dirname, 'Project 5 foto 3.pdf') },
  { name: 'foto-4', file: path.join(__dirname, 'Project 5 foto 4.pdf') },
  { name: 'foto-5', file: path.join(__dirname, 'Project 5 foto 5.pdf') },
];

let currentIndex = 0;
let server;

function convertNext() {
  if (currentIndex >= pdfFiles.length) {
    console.log('All done!');
    server.close();
    process.exit(0);
    return;
  }

  const { name, file } = pdfFiles[currentIndex];
  const outputPath = path.join(OUTPUT_DIR, `${name}.png`);
  const pdfUrl = `file:///${file.replace(/\\/g, '/')}`;

  console.log(`Converting ${name} (${currentIndex + 1}/${pdfFiles.length})...`);

  const htmlContent = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1920px; height: 1080px; background: white; }
  embed { width: 100%; height: 100%; }
</style>
</head>
<body>
  <embed src="${pdfUrl}" type="application/pdf" width="1920" height="1080" />
</body>
</html>`;

  const htmlPath = path.join(__dirname, `_temp_${name}.html`);
  fs.writeFileSync(htmlPath, htmlContent);

  const cmd = `"${EDGE_PATH}" --headless --disable-gpu --screenshot="${outputPath}" --window-size=1920,1080 --hide-scrollbars "file:///${htmlPath.replace(/\\/g, '/')}"`;

  exec(cmd, { timeout: 30000 }, (err) => {
    fs.unlinkSync(htmlPath);
    if (err) {
      console.error(`Error converting ${name}:`, err.message);
    } else {
      if (fs.existsSync(outputPath)) {
        const size = fs.statSync(outputPath).size;
        console.log(`  -> Saved ${name}.png (${Math.round(size/1024)}KB)`);
      }
    }
    currentIndex++;
    setTimeout(convertNext, 500);
  });
}

console.log('Starting Project 5 PDF to PNG conversion...');
console.log(`Output dir: ${OUTPUT_DIR}`);
convertNext();

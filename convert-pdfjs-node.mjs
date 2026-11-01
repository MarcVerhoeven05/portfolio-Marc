import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use the legacy build for Node.js
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

// Disable worker for Node.js
pdfjsLib.GlobalWorkerOptions.workerSrc = '';

const PROJECTS = [
  {
    projectNum: 5,
    outputDir: path.join(__dirname, 'public', 'images', 'project-5'),
    files: [
      path.join(__dirname, 'Project 5 foto 1.pdf'),
      path.join(__dirname, 'Project 5 foto 2.pdf'),
      path.join(__dirname, 'Project 5 foto 3.pdf'),
      path.join(__dirname, 'Project 5 foto 4.pdf'),
      path.join(__dirname, 'Project 5 foto 5.pdf'),
    ]
  }
];

async function convertPdfToImage(pdfPath, outputPath) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  
  const loadingTask = pdfjsLib.getDocument({
    data,
    disableFontFace: true,
    verbosity: 0,
  });
  
  const pdf = await loadingTask.promise;
  const page = await pdf.getPage(1);
  
  const viewport = page.getViewport({ scale: 2.0 });
  const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
  const ctx = canvas.getContext('2d');
  
  // Fill white background
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const renderContext = {
    canvasContext: ctx,
    viewport,
  };
  
  await page.render(renderContext).promise;
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Saved: ${outputPath} (${Math.round(buffer.length / 1024)}KB)`);
}

for (const project of PROJECTS) {
  fs.mkdirSync(project.outputDir, { recursive: true });
  for (let i = 0; i < project.files.length; i++) {
    const pdfFile = project.files[i];
    const outputFile = path.join(project.outputDir, `foto-${i + 1}.png`);
    console.log(`Converting ${path.basename(pdfFile)}...`);
    try {
      await convertPdfToImage(pdfFile, outputFile);
    } catch (err) {
      console.error(`Error converting ${pdfFile}:`, err.message);
    }
  }
}

console.log('Done!');

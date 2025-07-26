import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputBase = path.join(process.cwd(), 'src/assets');
const outputBase = path.join(process.cwd(), 'public/thumbs');

function optimizeImage(inputPath, outputPath) {
  sharp(inputPath)
    .resize({ width: 600 })
    .webp({ quality: 70 })
    .toFile(outputPath)
    .then(() => {
      console.log(`✅ Optimized: ${outputPath}`);
    })
    .catch((err) => {
      console.error(`❌ Error optimizing ${inputPath}:`, err);
    });
}

function processFolder(folderName) {
  const inputFolder = path.join(inputBase, folderName);
  const outputFolder = path.join(outputBase, folderName);

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  const files = fs.readdirSync(inputFolder);

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const inputPath = path.join(inputFolder, file);
    const outputFileName = file.replace(ext, '.webp');
    const outputPath = path.join(outputFolder, outputFileName);

    optimizeImage(inputPath, outputPath);
  });
}

function processRootFiles() {
  // Optimize images directly inside src/assets (not in any folder)
  const files = fs.readdirSync(inputBase, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  if (!fs.existsSync(outputBase)) {
    fs.mkdirSync(outputBase, { recursive: true });
  }

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const inputPath = path.join(inputBase, file);
    const outputFileName = file.replace(ext, '.webp');
    const outputPath = path.join(outputBase, outputFileName);

    optimizeImage(inputPath, outputPath);
  });
}

function main() {
  // Process subfolders
  const folders = fs.readdirSync(inputBase, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  folders.forEach((folder) => processFolder(folder));

  // Process root-level files
  processRootFiles();
}

main();

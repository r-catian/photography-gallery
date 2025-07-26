import fs from 'fs';
import path from 'path';

const thumbsDir = path.join(process.cwd(), 'public/thumbs');

function getImages(folderPath, folderName) {
  const files = fs.readdirSync(folderPath, { withFileTypes: true });
  const images = [];

  for (const file of files) {
    if (file.isFile()) {
      const ext = path.extname(file.name).toLowerCase();
      if (['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
        images.push(`/thumbs/${folderName}/${file.name}`);
      }
    }
  }

  return images;
}

function main() {
  const folders = fs.readdirSync(thumbsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const dataGallery = {};

  for (const folder of folders) {
    const folderPath = path.join(thumbsDir, folder);
    dataGallery[folder] = getImages(folderPath, folder);
  }

  const output = 'export const dataGallery = ' + JSON.stringify(dataGallery, null, 2) + ';\n';

  fs.writeFileSync(path.join(process.cwd(), 'src/data/dataGallery.js'), output);

  console.log('✅ dataGallery.js generated!');
}

main();

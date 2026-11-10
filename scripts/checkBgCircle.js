const sharp = require('sharp');
const path = require('path');

async function checkBgCircle() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  const { data, info } = await sharp(path.join(publicDir, "bg.png")).raw().toBuffer({ resolveWithObject: true });
  
  // Find all dark pixels in bg.png
  let minY = info.height, maxY = 0, minX = info.width, maxX = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      if (data[idx] < 60 && data[idx+1] < 55 && data[idx+2] < 50) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`Dark circle in bg.png: x=[${minX}, ${maxX}] (width ${maxX-minX}), y=[${minY}, ${maxY}] (height ${maxY-minY})`);
}

checkBgCircle();

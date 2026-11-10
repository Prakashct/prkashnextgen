const sharp = require('sharp');
const path = require('path');

async function inspectPrakash() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  const { data, info } = await sharp(path.join(publicDir, "prakash_netgen.png")).raw().toBuffer({ resolveWithObject: true });
  
  console.log(`Prakash image: ${info.width}x${info.height}, channels: ${info.channels}`);
  
  // Find bounding box of non-zero alpha
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const alpha = data[(y * info.width + x) * 4 + 3];
      if (alpha > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`Bounding box: x: [${minX}, ${maxX}] (width: ${maxX - minX}), y: [${minY}, ${maxY}] (height: ${maxY - minY})`);
}

inspectPrakash();

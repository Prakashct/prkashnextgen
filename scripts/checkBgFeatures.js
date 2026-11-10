const sharp = require('sharp');
const path = require('path');

async function checkBgFeatures() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  const { data, info } = await sharp(path.join(publicDir, "bg.png")).raw().toBuffer({ resolveWithObject: true });
  
  console.log(`bg.png is ${info.width} x ${info.height}`);

  // Let's find the center of the dark circle in bg.png
  // Dark circle has pixels with r < 100, g < 100, b < 100
  let totalX = 0, totalY = 0, count = 0;
  for (let y = 0; y < info.height; y += 4) {
    for (let x = 0; x < info.width; x += 4) {
      const idx = (y * info.width + x) * info.channels;
      if (data[idx] < 80 && data[idx+1] < 75 && data[idx+2] < 70) {
        totalX += x;
        totalY += y;
        count++;
      }
    }
  }
  if (count > 0) {
    console.log(`Dark circle center: approx (${Math.round(totalX / count)}, ${Math.round(totalY / count)})`);
    console.log(`Relative to bg.png: x=${(totalX / count / info.width * 100).toFixed(1)}%, y=${(totalY / count / info.height * 100).toFixed(1)}%`);
  }
}

checkBgFeatures();

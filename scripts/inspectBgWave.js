const sharp = require('sharp');
const path = require('path');

async function inspectBgWave() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  const { data, info } = await sharp(path.join(publicDir, "bg.png")).raw().toBuffer({ resolveWithObject: true });
  
  // Check bottom-left: x: 0..400, y: info.height - 100 .. info.height
  let hasWave = false;
  for (let y = info.height - 100; y < info.height; y += 10) {
    for (let x = 0; x < 400; x += 10) {
      const idx = (y * info.width + x) * info.channels;
      if (data[idx] < 80 || (data[idx] > 150 && data[idx+1] > 100 && data[idx+2] < 90)) {
        hasWave = true;
        break;
      }
    }
  }
  console.log(`Does bg.png have bottom-left wave? ${hasWave}`);
}

inspectBgWave();

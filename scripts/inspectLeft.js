const sharp = require('sharp');
const path = require('path');

async function inspectLeft() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  const { data, info } = await sharp(path.join(publicDir, "bg.png")).raw().toBuffer({ resolveWithObject: true });
  
  // Check if there is any dark text in the left half (x: 50 to 700, y: 50 to 800)
  let darkTextCount = 0;
  for (let y = 100; y < 800; y += 10) {
    for (let x = 100; x < 700; x += 10) {
      const idx = (y * info.width + x) * info.channels;
      if (data[idx] < 80 && data[idx+1] < 80 && data[idx+2] < 80) {
        darkTextCount++;
      }
    }
  }
  console.log(`Dark pixels in left half of bg.png: ${darkTextCount}`);
}

inspectLeft();

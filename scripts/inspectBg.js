const sharp = require('sharp');
const path = require('path');

async function inspectBg() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  // Let's sample colors in bg.png across different regions
  const { data, info } = await sharp(path.join(publicDir, "bg.png")).raw().toBuffer({ resolveWithObject: true });
  console.log(`bg.png dimensions: ${info.width}x${info.height}`);

  // Let's check center-right: does it have the dark circle?
  // Let's sample at x: Math.round(info.width * 0.7), y: Math.round(info.height * 0.5)
  const idxCircle = (Math.round(info.height * 0.5) * info.width + Math.round(info.width * 0.7)) * info.channels;
  console.log(`Circle region color: R=${data[idxCircle]}, G=${data[idxCircle+1]}, B=${data[idxCircle+2]}`);

  // Top-left:
  const idxTL = (50 * info.width + 50) * info.channels;
  console.log(`Top-left color: R=${data[idxTL]}, G=${data[idxTL+1]}, B=${data[idxTL+2]}`);

  // Bottom-center:
  const idxBC = ((info.height - 30) * info.width + Math.round(info.width * 0.5)) * info.channels;
  console.log(`Bottom-center color: R=${data[idxBC]}, G=${data[idxBC+1]}, B=${data[idxBC+2]}`);

  // Let's also check if top-right has the handwritten text in bg.png
  // Check x: Math.round(info.width * 0.8) to info.width, y: 50 to 200
  let darkCount = 0;
  for (let y = 50; y < 250; y += 5) {
    for (let x = Math.round(info.width * 0.75); x < info.width - 20; x += 5) {
      const idx = (y * info.width + x) * info.channels;
      if (data[idx] < 80 && data[idx+1] < 80 && data[idx+2] < 80) {
        darkCount++;
      }
    }
  }
  console.log(`Dark pixels in top-right area of bg.png: ${darkCount}`);
}

inspectBg();

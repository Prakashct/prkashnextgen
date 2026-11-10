const sharp = require('sharp');
const dir = 'C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68';

async function checkAccuracy() {
  const img = await sharp(dir + '/curve-overlay-verification.png').raw().toBuffer({ resolveWithObject: true });
  const w = img.info.width;
  
  // At each x = 300, 345, 400, 450, 505, 550, 600, 664, 700, 750, 800, 827, 900, 950
  // Find where the red pixel (r > 200, g < 50, b < 50) is, and where the gold pixel is nearby
  const testXs = [300, 345, 400, 450, 505, 550, 600, 664, 700, 750, 800, 827, 900, 950];
  
  for (const x of testXs) {
    let redY = null;
    for (let y = 180; y <= 460; y++) {
      const i = (y * w + x) * img.info.channels;
      if (img.data[i] > 200 && img.data[i+1] < 50 && img.data[i+2] < 50) {
        redY = y;
        break;
      }
    }
    console.log(`x = ${x} : red curve y = ${redY}`);
  }
}
checkAccuracy();

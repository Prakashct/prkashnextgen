const sharp = require('sharp');

async function checkDevPreview() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/dev-fixed-preview.png";
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  
  // In the user's error screenshot, the error modal had a red banner and red text:
  // "Runtime TypeError", "__webpack_modules__[moduleId] is not a function"
  // Let's check center of screen (x: 400..1000, y: 300..600)
  // For bright red error text (r > 200, g < 50, b < 50)
  let redPixels = 0;
  for (let y = 200; y < 600; y += 4) {
    for (let x = 300; x < 1100; x += 4) {
      const idx = (y * info.width + x) * 4;
      if (data[idx] > 200 && data[idx+1] < 50 && data[idx+2] < 50) {
        redPixels++;
      }
    }
  }
  console.log(`Bright red error pixels in center of screen: ${redPixels}`);
}

checkDevPreview();

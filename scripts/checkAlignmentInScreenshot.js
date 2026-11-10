const sharp = require('sharp');

async function checkAlignmentInScreenshot() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/desktop-1440.png";
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  
  // Find Prakash's head center: x in 800..1200, y in 100..300
  // Prakash's hair/skin pixels
  // And let's find the circle center in the background
  console.log(`Screenshot dimensions: ${info.width}x${info.height}`);
  
  // Let's sample along horizontal line y = 200 (across head)
  // And y = 500 (across torso)
  console.log("Sampled at y=200:");
  for (let x = 800; x <= 1300; x += 50) {
    const idx = (200 * info.width + x) * 4;
    console.log(`x=${x}: R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}`);
  }
}

checkAlignmentInScreenshot();

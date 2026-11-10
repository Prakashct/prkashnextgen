const sharp = require('sharp');

async function inspectNewScreenshot() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/desktop-1440.png";
  
  // Crop right side of desktop screenshot
  await sharp(file)
    .extract({ left: 650, top: 80, width: 750, height: 750 })
    .toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/test-desktop-new-right.png");
    
  console.log("Cropped new right side for inspection");
}

inspectNewScreenshot();

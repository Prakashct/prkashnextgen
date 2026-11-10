const sharp = require('sharp');

async function checkDetails() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/desktop-1440.png";
  
  // Crop right side of desktop screenshot
  await sharp(file)
    .extract({ left: 700, top: 80, width: 700, height: 750 })
    .toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/test-desktop-right.png");
    
  // Crop left side of desktop screenshot
  await sharp(file)
    .extract({ left: 60, top: 80, width: 640, height: 750 })
    .toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/test-desktop-left.png");
    
  console.log("Cropped left and right regions for inspection");
}
checkDetails();

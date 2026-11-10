const sharp = require('sharp');

async function inspectMobileLayout() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/mobile-390.png";
  
  // Crop upper half of mobile (y: 0 to 450) and lower half (y: 400 to 844)
  await sharp(file)
    .extract({ left: 0, top: 0, width: 390, height: 420 })
    .toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/test-mobile-top.png");
    
  await sharp(file)
    .extract({ left: 0, top: 420, width: 390, height: 424 })
    .toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/test-mobile-bottom.png");

  console.log("Saved test-mobile-top.png and test-mobile-bottom.png");
}

inspectMobileLayout();

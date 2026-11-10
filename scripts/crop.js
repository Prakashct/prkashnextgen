const sharp = require('sharp');
const fs = require('fs');

async function testCrop() {
  const input = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/.user_uploaded/media_1794028838828_1ca485e8.jpg";
  
  // Crop the right half (x: 450 to 1024, y: 0 to 576 -> width: 574, height: 576)
  await sharp(input)
    .extract({ left: 450, top: 0, width: 574, height: 576 })
    .toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/hero-right-raw.png");
    
  console.log("Cropped raw right side to hero-right-raw.png");
}

testCrop();

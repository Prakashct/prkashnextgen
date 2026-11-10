const sharp = require('sharp');

async function checkButtonPosition() {
  const input = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/.user_uploaded/media_1794028838828_1ca485e8.jpg";
  // Crop x: 0 to 500, y: 430 to 576
  await sharp(input)
    .extract({ left: 0, top: 430, width: 500, height: 146 })
    .toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/test-button-wave.png");
  console.log("Saved test-button-wave.png");
}
checkButtonPosition();

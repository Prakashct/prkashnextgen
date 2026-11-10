const sharp = require('sharp');

async function inspectBottom() {
  const input = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/.user_uploaded/media_1794028838828_1ca485e8.jpg";
  // Crop bottom strip: height 120px, full width 1024
  await sharp(input)
    .extract({ left: 0, top: 456, width: 1024, height: 120 })
    .toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/bottom-wave-ref.png");
  console.log("Saved bottom-wave-ref.png");
}
inspectBottom();

const sharp = require('sharp');
const path = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/.user_uploaded/media_1794028838828_1ca485e8.jpg";

async function run() {
  const meta = await sharp(path).metadata();
  console.log("Metadata:", meta);
}
run();

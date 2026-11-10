const sharp = require('sharp');

async function checkMobile() {
  const meta = await sharp("C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/mobile-390.png").metadata();
  console.log("Mobile screenshot size:", meta.width, "x", meta.height);
}

checkMobile();

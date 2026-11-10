const sharp = require('sharp');

async function inspectLayout() {
  const meta = await sharp("C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/desktop-1440.png").metadata();
  console.log("Desktop screenshot size:", meta.width, "x", meta.height);
}
inspectLayout();

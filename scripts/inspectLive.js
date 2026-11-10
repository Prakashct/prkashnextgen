const sharp = require('sharp');

async function inspectLive() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/live-3000-check.png";
  const meta = await sharp(file).metadata();
  console.log("Live check dimensions:", meta.width, "x", meta.height);
}

inspectLive();

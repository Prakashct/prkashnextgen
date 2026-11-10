const sharp = require('sharp');

async function inspectUserShot() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/.user_uploaded/media_1794034520750_9a0849d5.jpg";
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  console.log(`User screenshot is ${info.width}x${info.height}`);
  
  // Find where the dark circle starts and ends horizontally
  // At y = 200 (about halfway down)
  let circleStartX = -1, circleEndX = -1;
  for (let x = 400; x < info.width; x++) {
    const idx = (200 * info.width + x) * info.channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    // dark circle is dark (r < 70, g < 65, b < 60)
    if (r < 70 && g < 65 && b < 60) {
      if (circleStartX === -1) circleStartX = x;
      circleEndX = x;
    }
  }
  console.log(`At y=200, dark circle spans from x=${circleStartX} to x=${circleEndX}`);
  console.log(`Circle center is at x=${Math.round((circleStartX + circleEndX)/2)} (${((circleStartX + circleEndX)/2/info.width*100).toFixed(1)}%)`);
}

inspectUserShot();

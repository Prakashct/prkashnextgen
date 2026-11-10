const sharp = require('sharp');

async function inspectArea() {
  const { data, info } = await sharp("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/prakash-hero.png").raw().toBuffer({ resolveWithObject: true });
  // Check average color in the inpainted box: x=380..500, y=60..140
  let rSum = 0, gSum = 0, bSum = 0, count = 0;
  for (let y = 60; y < 140; y += 5) {
    for (let x = 380; x < 500; x += 5) {
      const idx = (y * info.width + x) * 4;
      rSum += data[idx];
      gSum += data[idx + 1];
      bSum += data[idx + 2];
      count++;
    }
  }
  console.log(`Area avg: R=${Math.round(rSum/count)}, G=${Math.round(gSum/count)}, B=${Math.round(bSum/count)}`);
}
inspectArea();

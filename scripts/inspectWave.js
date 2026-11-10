const sharp = require('sharp');

async function inspectWave() {
  const input = "C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/bottom-wave-ref.png";
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  console.log(`Wave dimensions: ${info.width}x${info.height}`);
  
  // Let's check the bottom-left corner at x: 0..100, y: 50..120
  // and see where the wave starts
  for (let x = 0; x < info.width; x += 100) {
    // find first pixel from bottom that is dark or gold
    for (let y = 0; y < info.height; y++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // if it deviates from background (r < 230 or g < 220)
      if (r < 235 || g < 225) {
        // console.log(`At x=${x}, wave starts at y=${y} (r=${r}, g=${g}, b=${b})`);
        break;
      }
    }
  }
}
inspectWave();

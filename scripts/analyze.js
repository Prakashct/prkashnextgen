const sharp = require('sharp');
const path = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/.user_uploaded/media_1794028838828_1ca485e8.jpg";

async function analyze() {
  const { data, info } = await sharp(path).raw().toBuffer({ resolveWithObject: true });
  console.log(`Image info: ${info.width}x${info.height}, channels: ${info.channels}`);
  
  // Let's check bounding box of Prakash
  // Prakash's head is roughly x: 600..800, y: 30..250
  // Background around top-right is x: 800..1024, y: 0..200
  // Let's sample colors in x: 800..1024, y: 40..160
  let darkCount = 0;
  for (let y = 40; y < 160; y += 5) {
    for (let x = 800; x < 1000; x += 5) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      // text is dark charcoal/black (r < 80, g < 80, b < 80)
      if (r < 80 && g < 80 && b < 80) {
        darkCount++;
      }
    }
  }
  console.log(`Dark text pixels in top-right handwritten area: ${darkCount}`);
}
analyze();

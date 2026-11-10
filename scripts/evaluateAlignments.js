const sharp = require('sharp');
const path = require('path');

async function evaluateAlignments() {
  const refPath = "C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\514ce60f-4c7b-4605-8c3c-70adae5dcb3d\\reference-design.jpg";
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";

  // In the original reference (1024x576):
  // Let's sample Prakash's nose/eyes position
  // Prakash's chin is around (712, 195) in 1024x576
  // Scaled to 1672x941: (712 * 1672 / 1024, 195 * 941 / 576) = (1163, 318)
  console.log("Expected chin in 1672x941: approx (1163, 318)");

  // Let's check where the chin is in prakash_netgen.png (1202x1308)
  // Let's inspect prakash_netgen.png feature coordinates
  const { data, info } = await sharp(path.join(publicDir, "prakash_netgen.png")).raw().toBuffer({ resolveWithObject: true });
  
  // Find top of head: first non-transparent pixel in center (x around 600)
  let headY = 0;
  for (let y = 0; y < info.height; y++) {
    if (data[(y * info.width + 600) * 4 + 3] > 100) {
      headY = y;
      break;
    }
  }
  console.log("Prakash cutout top of head at y =", headY, "in original 1202x1308");
}

evaluateAlignments();

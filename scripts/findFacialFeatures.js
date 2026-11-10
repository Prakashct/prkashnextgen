const sharp = require('sharp');
const path = require('path');

async function findFacialFeatures() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  const { data, info } = await sharp(path.join(publicDir, "prakash_netgen.png")).raw().toBuffer({ resolveWithObject: true });
  
  // Find beard/mouth/eyes in center column x: 550..650
  // Beard is dark hair (R < 50, G < 40, B < 35)
  // Skin is warm (R > 140, G > 90, B > 70)
  // Let's sample along y at x=600
  let firstSkin = -1, beardY = -1;
  for (let y = 100; y < 800; y++) {
    const idx = (y * info.width + 600) * 4;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    if (firstSkin === -1 && r > 150 && g > 100 && b > 80) {
      firstSkin = y; // forehead
    }
    if (firstSkin !== -1 && y > 300 && r < 60 && g < 50 && b < 45) {
      beardY = y; // beard
      break;
    }
  }
  console.log(`Forehead around y=${firstSkin}, Beard around y=${beardY}`);
}

findFacialFeatures();

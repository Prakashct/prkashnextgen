const sharp = require('sharp');
const path = require('path');

async function createPreciseComposite() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  // Let's resize Prakash so that height = 860px (top: 81px, bottom: 941px)
  const resizedPrakash = await sharp(path.join(publicDir, "prakash_netgen.png"))
    .resize({ height: 860 })
    .toBuffer();

  const meta = await sharp(resizedPrakash).metadata();
  console.log(`Resized Prakash: ${meta.width}x${meta.height}`);

  // Place at left: 790, top: 81
  await sharp(path.join(publicDir, "bg.png"))
    .composite([
      {
        input: resizedPrakash,
        top: 81,
        left: 790,
      }
    ])
    .toFile(path.join(publicDir, "precise-composite.png"));

  console.log("Saved precise-composite.png");
}

createPreciseComposite();

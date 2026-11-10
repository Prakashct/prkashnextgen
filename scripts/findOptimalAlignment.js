const sharp = require('sharp');
const path = require('path');

async function findOptimalAlignment() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  // bg is 1672 x 941
  // Prakash is 1202 x 1308
  // Let's test a few heights and horizontal positions
  const configs = [
    { height: 860, left: 790, top: 81, name: "align-1" },
    { height: 880, left: 780, top: 61, name: "align-2" },
    { height: 840, left: 810, top: 101, name: "align-3" },
    { height: 900, left: 770, top: 41, name: "align-4" },
  ];

  for (const cfg of configs) {
    const resizedPrakash = await sharp(path.join(publicDir, "prakash_netgen.png"))
      .resize({ height: cfg.height })
      .toBuffer();

    await sharp(path.join(publicDir, "bg.png"))
      .composite([{
        input: resizedPrakash,
        top: cfg.top,
        left: cfg.left
      }])
      .toFile(path.join(publicDir, `${cfg.name}.png`));
      
    console.log(`Saved ${cfg.name}.png`);
  }
}

findOptimalAlignment();

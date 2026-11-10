const sharp = require('sharp');
const path = require('path');

async function testComposite() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  // Let's create a WebP optimized version of bg.png for web performance!
  await sharp(path.join(publicDir, "bg.png"))
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "bg.webp"));

  // Let's create a WebP optimized version of prakash_netgen.png!
  await sharp(path.join(publicDir, "prakash_netgen.png"))
    .webp({ quality: 92 })
    .toFile(path.join(publicDir, "prakash.webp"));

  console.log("Created optimized bg.webp and prakash.webp");
}

testComposite();

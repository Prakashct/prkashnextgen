const sharp = require('sharp');
const path = require('path');

async function testExactCenter() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  const resized = await sharp(path.join(publicDir, "prakash_netgen.png"))
    .resize({ height: 860 })
    .toBuffer();

  await sharp(path.join(publicDir, "bg.png"))
    .composite([{
      input: resized,
      top: 81,
      left: 725
    }])
    .toFile(path.join(publicDir, "test-align-exact.png"));

  console.log("Saved test-align-exact.png");
}

testExactCenter();

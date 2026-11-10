const sharp = require('sharp');
const path = require('path');

async function testComparison() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  // Let's compare precise-composite.png (1672x941) with hero-reference.jpg (1024x576)
  // Let's resize hero-reference.jpg to 1672x941
  const refResized = await sharp(path.join(publicDir, "hero-reference.jpg"))
    .resize(1672, 941, { fit: 'fill' })
    .toBuffer();

  const refMeta = await sharp(refResized).metadata();
  console.log("Reference resized:", refMeta.width, "x", refMeta.height);

  // Save refResized and precise-composite.png side-by-side or difference
  await sharp(refResized).toFile(path.join(publicDir, "ref-1672.png"));
}

testComparison();

const sharp = require('sharp');
const path = require('path');

async function inspectNewImages() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  const bgMeta = await sharp(path.join(publicDir, "bg.png")).metadata();
  console.log("bg.png metadata:", bgMeta);

  const prakashMeta = await sharp(path.join(publicDir, "prakash_netgen.png")).metadata();
  console.log("prakash_netgen.png metadata:", prakashMeta);
}

inspectNewImages();

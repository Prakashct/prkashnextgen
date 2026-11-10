const sharp = require('sharp');
const path = require('path');

async function makeThumbnail() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  // Resize bg.png to 836x470 and save to brain
  await sharp(path.join(publicDir, "bg.png"))
    .resize(836, 470)
    .toFile("C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\514ce60f-4c7b-4605-8c3c-70adae5dcb3d\\bg-thumb.png");

  console.log("Created bg-thumb.png in brain");
}

makeThumbnail();

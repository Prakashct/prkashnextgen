const sharp = require('sharp');

async function inspectScriptText() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/desktop-1440.png";
  
  // Crop the top right corner of the hero (x: 1050 to 1440, y: 80 to 280)
  await sharp(file)
    .extract({ left: 1050, top: 80, width: 380, height: 200 })
    .toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/test-script-corner.png");

  console.log("Saved test-script-corner.png");
}

inspectScriptText();

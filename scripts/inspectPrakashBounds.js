const sharp = require('sharp');

async function inspectPrakashBounds() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/desktop-1440.png";
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  
  // Let's sample along y=300 (across shoulders) and y=600 (across forearms/hands/suit)
  // Let's print out what colors are there from x=700 to 1400 at y=500
  console.log("Colors at y=500:");
  for (let x = 700; x <= 1400; x += 35) {
    const idx = (500 * info.width + x) * 4;
    console.log(`x=${x}: R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}`);
  }
}

inspectPrakashBounds();

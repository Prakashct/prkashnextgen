const sharp = require('sharp');

async function checkAlignment() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/desktop-1440.png";
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  
  // Sample along y = 600 across x: 800..1300
  // Prakash's suit is dark (R < 50, G < 50, B < 50)
  // Gold arc is warm bright (R > 180, G > 130, B > 50)
  let suitMinX = 2000, suitMaxX = 0;
  for (let x = 700; x < 1400; x++) {
    const idx = (600 * info.width + x) * 4;
    if (data[idx] < 60 && data[idx+1] < 55 && data[idx+2] < 50) {
      if (x < suitMinX) suitMinX = x;
      if (x > suitMaxX) suitMaxX = x;
    }
  }
  console.log(`Prakash suit at y=600 spans x=[${suitMinX}, ${suitMaxX}], center=${Math.round((suitMinX + suitMaxX)/2)}`);
  
  // Let's check where the circle in the background is at y=600
  // Left edge of circle in bg.png
  console.log("Center of Prakash:", Math.round((suitMinX + suitMaxX)/2));
}

checkAlignment();

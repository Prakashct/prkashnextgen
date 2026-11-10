const sharp = require('sharp');

async function verifyScreenshots() {
  const tall = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/tall-portrait-800x1200.png";
  const wide = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/wide-landscape-1920x820.png";

  const { data: tData, info: tInfo } = await sharp(tall).raw().toBuffer({ resolveWithObject: true });
  console.log(`Tall image is ${tInfo.width}x${tInfo.height}`);
  
  // In tall, check where text starts vertically:
  // In the user's broken shot, text started around y=650 (bottom half).
  // In our centered layout, let's find the first dark text pixel around x=100..300:
  let firstTextY = -1;
  for (let y = 100; y < tInfo.height; y++) {
    for (let x = 80; x < 350; x += 5) {
      const idx = (y * tInfo.width + x) * tInfo.channels;
      if (tData[idx] < 50 && tData[idx+1] < 50 && tData[idx+2] < 50) {
        firstTextY = y;
        break;
      }
    }
    if (firstTextY !== -1) break;
  }
  console.log(`In tall viewport (height 1200), first text starts at y=${firstTextY}`);

  const { data: wData, info: wInfo } = await sharp(wide).raw().toBuffer({ resolveWithObject: true });
  console.log(`Wide image is ${wInfo.width}x${wInfo.height}`);
  
  // In wide, find top of text at x=150..300, and top of Prakash at x=1100..1400:
  let wideTextTop = -1, widePrakashTop = -1;
  for (let y = 100; y < wInfo.height; y++) {
    if (wideTextTop === -1) {
      for (let x = 120; x < 350; x += 5) {
        const idx = (y * wInfo.width + x) * wInfo.channels;
        if (wData[idx] < 50 && wData[idx+1] < 50 && wData[idx+2] < 50) {
          wideTextTop = y;
          break;
        }
      }
    }
    if (widePrakashTop === -1) {
      for (let x = 1100; x < 1500; x += 5) {
        const idx = (y * wInfo.width + x) * wInfo.channels;
        // hair
        if (wData[idx] < 40 && wData[idx+1] < 35 && wData[idx+2] < 30) {
          widePrakashTop = y;
          break;
        }
      }
    }
  }
  console.log(`In wide viewport: Text starts at y=${wideTextTop}, Prakash head starts at y=${widePrakashTop}`);
  console.log(`Vertical difference between text and head: ${Math.abs(wideTextTop - widePrakashTop)}px`);
}

verifyScreenshots();

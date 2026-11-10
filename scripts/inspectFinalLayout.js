const sharp = require('sharp');

async function inspectFinalLayout() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/widescreen-1920.png";
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  console.log(`widescreen: ${info.width}x${info.height}, channels: ${info.channels}`);

  // Let's check the bottom row y = info.height - 5:
  // Is Prakash touching the bottom row?
  // Let's check x: 1000..1800 at y = 1070
  let darkCount = 0;
  for (let x = 1100; x < 1850; x++) {
    const idx = (1070 * info.width + x) * info.channels;
    if (data[idx] < 60 && data[idx+1] < 55 && data[idx+2] < 50) {
      darkCount++;
    }
  }
  console.log(`Dark pixels at bottom row (y=1070) under Prakash: ${darkCount}`);

  // Let's check right side at y = 700:
  // Where does Prakash's right elbow reach?
  let maxPrakashX = 0;
  for (let x = 1200; x < info.width; x++) {
    const idx = (700 * info.width + x) * info.channels;
    if (data[idx] < 70 && data[idx+1] < 65 && data[idx+2] < 60) {
      maxPrakashX = x;
    }
  }
  console.log(`Prakash reaches to x=${maxPrakashX} (${(maxPrakashX/info.width*100).toFixed(1)}% of screen)`);
}

inspectFinalLayout();

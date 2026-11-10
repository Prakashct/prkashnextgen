const sharp = require('sharp');
const path = require('path');

async function inspectBgInDetail() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  const { data, info } = await sharp(path.join(publicDir, "bg.png")).raw().toBuffer({ resolveWithObject: true });
  
  console.log(`bg.png is ${info.width}x${info.height}, channels: ${info.channels}`);
  
  // Let's sample colors in a grid across bg.png:
  // 5 rows, 5 cols
  for (let r = 0; r < 5; r++) {
    const y = Math.round((r / 4) * (info.height - 1));
    let rowStr = `y=${y}: `;
    for (let c = 0; c < 5; c++) {
      const x = Math.round((c / 4) * (info.width - 1));
      const idx = (y * info.width + x) * info.channels;
      rowStr += `[x=${x}: R=${data[idx]},G=${data[idx+1]},B=${data[idx+2]}] `;
    }
    console.log(rowStr);
  }
}

inspectBgInDetail();

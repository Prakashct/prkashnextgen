const sharp = require('sharp');

async function inspectDevPreview() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/dev-fixed-preview.png";
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  console.log(`dev-fixed-preview is ${info.width}x${info.height}`);

  // Check top-left background color
  const idxTL = (150 * info.width + 100) * 4;
  console.log(`Top-left: R=${data[idxTL]}, G=${data[idxTL+1]}, B=${data[idxTL+2]}`);

  // Check top-right:
  const idxTR = (150 * info.width + 1200) * 4;
  console.log(`Top-right: R=${data[idxTR]}, G=${data[idxTR+1]}, B=${data[idxTR+2]}`);

  // Check bottom-right:
  const idxBR = (700 * info.width + 1300) * 4;
  console.log(`Bottom-right: R=${data[idxBR]}, G=${data[idxBR+1]}, B=${data[idxBR+2]}`);
}

inspectDevPreview();

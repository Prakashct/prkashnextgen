const sharp = require('sharp');

async function inspectNormalHero() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/brain/514ce60f-4c7b-4605-8c3c-70adae5dcb3d/normal-hero-preview.png";
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  console.log(`normal-hero-preview: ${info.width}x${info.height}, channels: ${info.channels}`);
  
  // Sample behind Prakash:
  // Circular backdrop on the right at y=450, x=1150
  const idxCircle = (450 * info.width + 1150) * info.channels;
  console.log(`Circle behind Prakash (x=1150, y=450): R=${data[idxCircle]}, G=${data[idxCircle+1]}, B=${data[idxCircle+2]}`);

  // Sample gold curves at y=550, x=1350
  const idxGold = (550 * info.width + 1350) * info.channels;
  console.log(`Gold curves (x=1350, y=550): R=${data[idxGold]}, G=${data[idxGold+1]}, B=${data[idxGold+2]}`);

  // Sample bottom wave at y=680, x=200
  const idxWave = (680 * info.width + 200) * info.channels;
  console.log(`Bottom wave left (x=200, y=680): R=${data[idxWave]}, G=${data[idxWave+1]}, B=${data[idxWave+2]}`);
}

inspectNormalHero();

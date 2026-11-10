const sharp = require('sharp');

async function checkRefCircle() {
  const refPath = "C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\514ce60f-4c7b-4605-8c3c-70adae5dcb3d\\reference-design.jpg";
  const { data, info } = await sharp(refPath).raw().toBuffer({ resolveWithObject: true });
  
  console.log(`Reference size: ${info.width}x${info.height}`);
  
  // In reference, check x=600..850, y=0..300
  // Prakash head is around x=700, y=50..220
  // Behind his shoulders: at x=550 (to the left of his shoulder) and x=850 (to the right of his shoulder)
  // Let's check where the dark circle is on the left of his shoulder at x=550
  for (let y = 100; y < 500; y += 20) {
    const idx = (y * info.width + 550) * info.channels;
    console.log(`At x=550, y=${y}: R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}`);
  }
}

checkRefCircle();

const sharp = require('sharp');

async function checkDarkText() {
  const file = "C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/test-script-corner.png";
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  
  let count = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] < 60 && data[i+1] < 60 && data[i+2] < 60) {
      count++;
    }
  }
  console.log(`Dark text pixels in script corner: ${count}`);
}

checkDarkText();

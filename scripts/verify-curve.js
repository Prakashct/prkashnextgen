const sharp = require('sharp');
const dir = 'C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68';
const refPath = dir + '/.user_uploaded/media_1794285077185_e32fc769.jpg';

const curveD = 'M 230 448 C 265 435, 305 422, 345 421 C 395 422, 455 408, 505 380 C 555 360, 615 344, 664 336 C 715 328, 770 298, 827 267 C 870 258, 925 240, 975 219';

const svg = `<svg width="1024" height="576" viewBox="0 0 1024 576" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${curveD}" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" />
  <circle cx="345" cy="421" r="5" fill="#00FF00" />
  <circle cx="505" cy="380" r="5" fill="#00FF00" />
  <circle cx="664" cy="336" r="5" fill="#00FF00" />
  <circle cx="827" cy="267" r="5" fill="#00FF00" />
  <circle cx="975" cy="219" r="5" fill="#00FF00" />
</svg>`;

async function testOverlay() {
  const curveBuf = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(refPath)
    .composite([{ input: curveBuf, top: 0, left: 0 }])
    .toFile(dir + '/curve-overlay-verification.png');
  console.log('Saved curve-overlay-verification.png');
}
testOverlay();

const sharp = require('sharp');

// Let's verify the exact coordinates in a 960x400 viewBox
const x1 = 120, y1 = 345;
const x2 = 360, y2 = 295;
const x3 = 600, y3 = 240;
const x4 = 830, y4 = 135;
const arrowX = 945, arrowY = 70;

const svg = `<svg width="960" height="400" viewBox="0 0 960 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="curveGold" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D49A4B" />
      <stop offset="50%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#9B5D14" />
    </linearGradient>
  </defs>

  <!-- Curve passing exactly through (x1,y1), (x2,y2), (x3,y3), (x4,y4) -->
  <path d="M 30 355 C 70 355, 95 345, ${x1} ${y1} C 200 345, 290 295, ${x2} ${y2} C 440 295, 520 240, ${x3} ${y3} C 690 240, 760 135, ${x4} ${y4} C 870 135, 915 95, ${arrowX} ${arrowY}"
        stroke="url(#curveGold)" stroke-width="2.5" stroke-linecap="round" />

  <!-- Arrow -->
  <path d="M 922 78 L 946 68 L 938 94 Z" fill="#B87320" />

  <!-- Stalks -->
  <line x1="${x1}" y1="${y1 - 25}" x2="${x1}" y2="${y1}" stroke="#B87320" stroke-width="1.5" />
  <line x1="${x2}" y1="${y2 - 25}" x2="${x2}" y2="${y2}" stroke="#B87320" stroke-width="1.5" />
  <line x1="${x3}" y1="${y3 - 25}" x2="${x3}" y2="${y3}" stroke="#B87320" stroke-width="1.5" />
  <line x1="${x4}" y1="${y4 - 20}" x2="${x4}" y2="${y4}" stroke="#B87320" stroke-width="1.5" />

  <!-- Dots -->
  <circle cx="${x1}" cy="${y1}" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
  <circle cx="${x2}" cy="${y2}" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
  <circle cx="${x3}" cy="${y3}" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
  <circle cx="${x4}" cy="${y4}" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
</svg>`;

sharp(Buffer.from(svg))
  .png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68/test-curve-exact2.png')
  .then(() => console.log('Curve exact 2 rendered successfully!'));

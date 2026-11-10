const sharp = require('sharp');
const fs = require('fs');

const svg = `<svg width="960" height="420" viewBox="0 0 960 420" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldLine" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D49A4B" />
      <stop offset="50%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#9B5D14" />
    </linearGradient>
  </defs>

  {/* Curve */}
  <path d="M 40 375 C 90 375, 110 365, 140 365 C 220 365, 320 315, 380 315 C 470 315, 560 255, 620 255 C 710 255, 800 135, 860 135 C 900 135, 930 85, 955 60"
        stroke="url(#goldLine)" stroke-width="2.5" stroke-linecap="round" />

  {/* Arrow */}
  <path d="M 932 68 L 956 58 L 948 84 Z" fill="#B87320" />

  {/* Connectors & Dots */}
  {/* Step 1 */}
  <line x1="140" y1="345" x2="140" y2="365" stroke="#B87320" stroke-width="1.5" />
  <circle cx="140" cy="365" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />

  {/* Step 2 */}
  <line x1="380" y1="295" x2="380" y2="315" stroke="#B87320" stroke-width="1.5" />
  <circle cx="380" cy="315" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />

  {/* Step 3 */}
  <line x1="620" y1="235" x2="620" y2="255" stroke="#B87320" stroke-width="1.5" />
  <circle cx="620" cy="255" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />

  {/* Step 4 */}
  <line x1="860" y1="115" x2="860" y2="135" stroke="#B87320" stroke-width="1.5" />
  <circle cx="860" cy="135" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
</svg>`;

sharp(Buffer.from(svg.replace('{/* Curve */}', '').replace('{/* Arrow */}', '').replace('{/* Connectors & Dots */}', '').replace('{/* Step 1 */}', '').replace('{/* Step 2 */}', '').replace('{/* Step 3 */}', '').replace('{/* Step 4 */}', '')))
  .png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68/test-curve-exact.png')
  .then(() => console.log('Exact curve rendered successfully!'));

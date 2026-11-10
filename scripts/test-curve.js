const sharp = require('sharp');

const svg = `<svg width="800" height="350" viewBox="0 0 800 350" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldLine" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D49B48" />
      <stop offset="50%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#A16216" />
    </linearGradient>
    <marker id="goldArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#B87320" />
    </marker>
  </defs>

  <path d="M 30 300 C 150 310, 260 265, 410 225 C 550 185, 680 145, 780 75" stroke="url(#goldLine)" stroke-width="2.5" stroke-linecap="round" marker-end="url(#goldArrow)" />

  <circle cx="110" cy="298" r="5" fill="#B87320" stroke="#FFF8F1" stroke-width="2.5" />
  <circle cx="320" cy="250" r="5" fill="#B87320" stroke="#FFF8F1" stroke-width="2.5" />
  <circle cx="530" cy="190" r="5" fill="#B87320" stroke="#FFF8F1" stroke-width="2.5" />
  <circle cx="730" cy="110" r="5" fill="#B87320" stroke="#FFF8F1" stroke-width="2.5" />
</svg>`;

sharp(Buffer.from(svg)).png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68/test-curve.png')
  .then(() => console.log('Curve tested successfully'));

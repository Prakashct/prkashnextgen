const sharp = require('C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/node_modules/sharp');

const svg = `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 13.5C7.5 12.5 12 9.5 18.5 4" />
  <polyline points="13.5 4 18.5 4 18.5 9" />
  <line x1="4.5" y1="18.5" x2="4.5" y2="19.5" stroke-width="2.2" />
  <line x1="8.5" y1="15.5" x2="8.5" y2="19.5" stroke-width="2.2" />
  <line x1="12.5" y1="12" x2="12.5" y2="19.5" stroke-width="2.2" />
  <line x1="16.5" y1="8.5" x2="16.5" y2="19.5" stroke-width="2.2" />
</svg>`;

sharp(Buffer.from(svg)).png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/93bef118-5872-4ac7-9e72-b4790633715c/test-growth-icon2.png')
  .then(() => console.log('Growth icon 2 rendered!'));

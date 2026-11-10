const sharp = require('C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/node_modules/sharp');

const svg = `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="4" r="1" fill="#B87320" stroke="none" />
  <line x1="12" y1="5" x2="12" y2="8" />
  <rect x="4" y="8" width="16" height="12" rx="4.5" />
  <line x1="2" y1="14" x2="4" y2="14" stroke-width="2.5" />
  <line x1="20" y1="14" x2="22" y2="14" stroke-width="2.5" />
  <circle cx="9" cy="13" r="1" fill="#B87320" stroke="none" />
  <circle cx="15" cy="13" r="1" fill="#B87320" stroke="none" />
  <line x1="10" y1="16.5" x2="14" y2="16.5" />
</svg>`;

sharp(Buffer.from(svg)).png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/93bef118-5872-4ac7-9e72-b4790633715c/test-bot-icon2.png')
  .then(() => console.log('Bot icon 2 rendered!'));

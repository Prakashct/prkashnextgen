const sharp = require('C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/node_modules/sharp');

const svg = `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.6 16.8 5.4 12.6A2 2 0 0 1 4.5 11V9a2 2 0 0 1 .9-1.6l6.2-4.2a1 1 0 0 1 1.6.8v11.8a1 1 0 0 1-1.6.8Z" />
  <path d="M6 13v5a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5V15" />
  <line x1="16" y1="9" x2="19" y2="7.5" />
  <line x1="16.5" y1="12" x2="20" y2="12" />
  <line x1="16" y1="15" x2="19" y2="16.5" />
</svg>`;

sharp(Buffer.from(svg)).png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/93bef118-5872-4ac7-9e72-b4790633715c/test-megaphone-icon.png')
  .then(() => console.log('Megaphone icon rendered!'));

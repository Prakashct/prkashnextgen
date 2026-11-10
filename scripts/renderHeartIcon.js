const sharp = require('C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/node_modules/sharp');

const svg = `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.5 13.572 12 21l-7.5-7.428A5 5 0 1 1 12 7.006a5 5 0 1 1 7.5 6.566" />
  <polyline points="3 13 7.5 13 9.5 10 12.5 16 15 11.5 17 13 21 13" />
</svg>`;

sharp(Buffer.from(svg)).png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/93bef118-5872-4ac7-9e72-b4790633715c/test-heart-icon.png')
  .then(() => console.log('Heart icon rendered!'));

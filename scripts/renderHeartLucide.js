const sharp = require('C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/node_modules/sharp');

const svg = `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h4.28" />
</svg>`;

sharp(Buffer.from(svg)).png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/93bef118-5872-4ac7-9e72-b4790633715c/test-heart-lucide.png')
  .then(() => console.log('Heart Lucide rendered!'));

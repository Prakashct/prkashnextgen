const sharp = require('sharp');
const path = require('path');

const iconHeart = `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.5 13.572 12 21l-7.5-7.428A5 5 0 1 1 12 7.006a5 5 0 1 1 7.5 6.566" />
  <polyline points="3 12.5 7.5 12.5 9.5 9 12.5 16 15 11 17 12.5 21 12.5" />
</svg>`;

const iconGrowth = `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 13.5C7.5 12.5 12 9.5 18.5 4" />
  <polyline points="13.5 4 18.5 4 18.5 9" />
  <line x1="4.5" y1="17.5" x2="4.5" y2="19.5" stroke-width="2.2" stroke-linecap="round" />
  <line x1="8.5" y1="14.5" x2="8.5" y2="19.5" stroke-width="2.2" stroke-linecap="round" />
  <line x1="12.5" y1="11" x2="12.5" y2="19.5" stroke-width="2.2" stroke-linecap="round" />
  <line x1="16.5" y1="7.5" x2="16.5" y2="19.5" stroke-width="2.2" stroke-linecap="round" />
</svg>`;

const iconBot = `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="4" r="1.2" fill="#B87320" stroke="none" />
  <line x1="12" y1="5.2" x2="12" y2="8" />
  <rect x="4" y="8" width="16" height="12" rx="4.5" />
  <line x1="2" y1="14" x2="4" y2="14" stroke-width="2.2" stroke-linecap="round" />
  <line x1="20" y1="14" x2="22" y2="14" stroke-width="2.2" stroke-linecap="round" />
  <circle cx="9" cy="13" r="1.2" fill="#B87320" stroke="none" />
  <circle cx="15" cy="13" r="1.2" fill="#B87320" stroke="none" />
  <line x1="10" y1="16.5" x2="14" y2="16.5" stroke-linecap="round" />
</svg>`;

const iconMegaphone = `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.6 16.8 5.4 12.6A2 2 0 0 1 4.5 11V9a2 2 0 0 1 .9-1.6l6.2-4.2a1 1 0 0 1 1.6.8v11.8a1 1 0 0 1-1.6.8Z" />
  <path d="M6 13v5a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5V15" />
  <line x1="16" y1="9" x2="19" y2="7.5" stroke-linecap="round" />
  <line x1="16.5" y1="12" x2="20" y2="12" stroke-linecap="round" />
  <line x1="16" y1="15" x2="19" y2="16.5" stroke-linecap="round" />
</svg>`;

const dir = 'C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68';
Promise.all([
  sharp(Buffer.from(iconHeart)).png().toFile(path.join(dir, 'test-icon1.png')),
  sharp(Buffer.from(iconGrowth)).png().toFile(path.join(dir, 'test-icon2.png')),
  sharp(Buffer.from(iconBot)).png().toFile(path.join(dir, 'test-icon3.png')),
  sharp(Buffer.from(iconMegaphone)).png().toFile(path.join(dir, 'test-icon4.png'))
]).then(() => console.log('All 4 test icons rendered successfully!'));

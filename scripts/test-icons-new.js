const sharp = require('sharp');
const dir = 'C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68';

// Target Bullseye Icon
const targetIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="6" />
  <circle cx="12" cy="12" r="2" fill="#B87320" />
  <path d="m19 5-7 7" />
  <path d="M14 5h5v5" />
</svg>`;

// Lightbulb Icon
const bulbIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18h6" />
  <path d="M10 21h4" />
  <path d="M12 3a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.1V16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.9c1.8-1 3-2.9 3-5.1a6 6 0 0 0-6-6z" />
  <line x1="12" y1="1" x2="12" y2="2" />
  <line x1="4.5" y1="4.5" x2="5.5" y2="5.5" />
  <line x1="19.5" y1="4.5" x2="18.5" y2="5.5" />
</svg>`;

// Growth Chart Icon
const chartIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 13.5C7.5 12.5 12 9.5 18.5 4" />
  <polyline points="13.5 4 18.5 4 18.5 9" />
  <line x1="5" y1="17.5" x2="5" y2="19.5" stroke-width="2.2" />
  <line x1="9" y1="14.5" x2="9" y2="19.5" stroke-width="2.2" />
  <line x1="13" y1="11.5" x2="13" y2="19.5" stroke-width="2.2" />
  <line x1="17" y1="8" x2="17" y2="19.5" stroke-width="2.2" />
</svg>`;

// Rocket Icon
const rocketIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="#B87320" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
</svg>`;

console.log('Icons prepared successfully.');

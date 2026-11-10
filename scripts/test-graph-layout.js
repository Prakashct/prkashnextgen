const sharp = require('sharp');
const dir = 'C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68';

// Test 840 x 360 Right Column Graph SVG
const w = 840;
const h = 360;

// Step positions
// Dot 1: (110, 290), Dot 2: (300, 235), Dot 3: (490, 175), Dot 4: (680, 105), Arrow: (790, 45)
const curveD = "M 30 315 C 65 310, 85 295, 110 290 C 175 280, 240 248, 300 235 C 370 220, 430 190, 490 175 C 560 158, 625 120, 680 105 C 725 92, 760 65, 790 45";

const graphSvg = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldCurve" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D49A4B" />
      <stop offset="50%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#9B5D14" />
    </linearGradient>

    <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#000000" flood-opacity="0.08" />
    </filter>
  </defs>

  <rect width="${w}" height="${h}" fill="#FAF4ED" />

  <!-- Trajectory Curve -->
  <path d="${curveD}" stroke="url(#goldCurve)" stroke-width="2.6" stroke-linecap="round" />

  <!-- Arrow -->
  <path d="M 770 52 L 795 44 L 784 70 L 778 58 Z" fill="#B87320" />

  <!-- STEP 1: Understand (Stalk x=110, Dot 110,290) -->
  <g>
    <line x1="110" y1="205" x2="110" y2="290" stroke="#B87320" stroke-width="1.4" />
    <circle cx="110" cy="290" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
    <g filter="url(#badgeShadow)">
      <circle cx="132" cy="155" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="132" cy="155" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <circle cx="130" cy="153" r="6" stroke="#B87320" stroke-width="1.8" fill="none" />
      <line x1="134" y1="157" x2="140" y2="163" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
    </g>
    <text x="120" y="208" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Understand</text>
    <text x="120" y="228" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="120" dy="0">Identify the clinic's</tspan>
      <tspan x="120" dy="16">challenges and</tspan>
      <tspan x="120" dy="16">opportunities.</tspan>
    </text>
  </g>

  <!-- STEP 2: Plan (Stalk x=300, Dot 300,235) -->
  <g>
    <line x1="300" y1="150" x2="300" y2="235" stroke="#B87320" stroke-width="1.4" />
    <circle cx="300" cy="235" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
    <g filter="url(#badgeShadow)">
      <circle cx="322" cy="100" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="322" cy="100" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <path d="M 319 106 L 325 106 M 320 108 L 324 108 M 322 92 C 318 92, 315 95, 315 99 C 315 101, 317 103, 319 104 L 319 105 L 325 105 L 325 104 C 327 103, 329 101, 329 99 C 329 95, 326 92, 322 92 Z" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <line x1="322" y1="87" x2="322" y2="89" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
      <line x1="314" y1="90" x2="316" y2="92" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
      <line x1="330" y1="90" x2="328" y2="92" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
    </g>
    <text x="310" y="153" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Plan</text>
    <text x="310" y="173" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="310" dy="0">Create a practical</tspan>
      <tspan x="310" dy="16">digital growth</tspan>
      <tspan x="310" dy="16">strategy.</tspan>
    </text>
  </g>

  <!-- STEP 3: Implement (Stalk x=490, Dot 490,175) -->
  <g>
    <line x1="490" y1="95" x2="490" y2="175" stroke="#B87320" stroke-width="1.4" />
    <circle cx="490" cy="175" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
    <g filter="url(#badgeShadow)">
      <circle cx="512" cy="48" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="512" cy="48" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <circle cx="512" cy="48" r="4.5" stroke="#B87320" stroke-width="1.6" fill="none" />
      <path d="M 512 39 L 512 42 M 512 54 L 512 57 M 503 48 L 506 48 M 518 48 L 521 48 M 505 41 L 508 44 M 516 52 L 519 55 M 505 55 L 508 52 M 516 44 L 519 41" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
    </g>
    <text x="500" y="98" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Implement</text>
    <text x="500" y="118" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="500" dy="0">Set up the right</tspan>
      <tspan x="500" dy="16">digital tools</tspan>
      <tspan x="500" dy="16">and systems.</tspan>
    </text>
  </g>

  <!-- STEP 4: Grow (Stalk x=680, Dot 680,105) -->
  <g>
    <line x1="680" y1="45" x2="680" y2="105" stroke="#B87320" stroke-width="1.4" />
    <circle cx="680" cy="105" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
    <g filter="url(#badgeShadow)">
      <circle cx="702" cy="28" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="702" cy="28" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <line x1="696" y1="32" x2="696" y2="34" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <line x1="700" y1="29" x2="700" y2="34" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <line x1="704" y1="26" x2="704" y2="34" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <line x1="708" y1="22" x2="708" y2="34" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <path d="M 694 28 C 698 27, 704 24, 709 19" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" fill="none" />
      <path d="M 705 19 L 710 19 L 710 24" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </g>
    <text x="690" y="48" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Grow</text>
    <text x="690" y="68" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="690" dy="0">Improve visibility,</tspan>
      <tspan x="690" dy="16">patient engagement,</tspan>
      <tspan x="690" dy="16">and long-term growth.</tspan>
    </text>
  </g>
</svg>`;

sharp(Buffer.from(graphSvg))
  .png().toFile(dir + '/test-graph-only.png')
  .then(() => console.log('Saved test-graph-only.png'));

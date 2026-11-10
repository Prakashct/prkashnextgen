const sharp = require('sharp');
const fs = require('fs');

// Build an SVG that matches Photo 2 (1024 x 450) exactly:
const svg = `<svg width="1024" height="450" viewBox="0 0 1024 450" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Curve Gradient -->
    <linearGradient id="goldCurve" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D49A4B" />
      <stop offset="50%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#9B5D14" />
    </linearGradient>

    <!-- Metallic Wave Rim Gradient -->
    <linearGradient id="waveGoldRim" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8C5317" />
      <stop offset="20%" stop-color="#E5B869" />
      <stop offset="45%" stop-color="#FFE4AC" />
      <stop offset="70%" stop-color="#D49842" />
      <stop offset="90%" stop-color="#E5B869" />
      <stop offset="100%" stop-color="#8C5317" />
    </linearGradient>

    <!-- Dark Wave Fill -->
    <linearGradient id="waveDarkFill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#241E1A" />
      <stop offset="40%" stop-color="#181412" />
      <stop offset="100%" stop-color="#0E0C0A" />
    </linearGradient>

    <!-- Drop Shadow for Badges -->
    <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.06" />
    </filter>

    <!-- Button Gradient -->
    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#945812" />
    </linearGradient>
  </defs>

  <!-- Background Warm Cream -->
  <rect width="1024" height="450" fill="#FAF4ED" />

  <!-- LEFT COLUMN -->
  <!-- Eyebrow: MY APPROACH -->
  <text x="65" y="70" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.26em" fill="#3F3A36">MY APPROACH</text>
  <line x1="162" y1="67" x2="202" y2="67" stroke="#B87320" stroke-width="2" stroke-linecap="round" />

  <!-- Heading -->
  <text x="65" y="118" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="800" fill="#22201F" letter-spacing="-0.03em">From Digital Presence to</text>
  <text x="65" y="156" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="800" fill="#B87320" letter-spacing="-0.03em">Patient Growth.</text>

  <!-- Description -->
  <text x="65" y="196" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13" font-weight="400" fill="#554F49" line-height="1.5">
    <tspan x="65" dy="0">A simple and practical approach to help clinics</tspan>
    <tspan x="65" dy="19">build, streamline, and grow their digital presence.</tspan>
  </text>

  <!-- CTA Button -->
  <g cursor="pointer">
    <rect x="65" y="245" width="142" height="42" rx="21" fill="url(#btnGrad)" filter="url(#badgeShadow)" />
    <text x="92" y="271" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">My Approach</text>
    <path d="M 180 267 L 186 267 M 183 264 L 186 267 L 183 270" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- ASCENDING GOLD TRAJECTORY CURVE -->
  <!-- Starts near (260, 375), through (353, 367), (519, 326), (679, 278), (846, 172) to (967, 104) -->
  <path d="M 270 375 C 310 375, 335 367, 353 367 C 420 367, 470 338, 519 326 C 585 310, 630 288, 679 278 C 750 263, 810 200, 846 172 C 885 142, 925 118, 967 104"
        stroke="url(#goldCurve)" stroke-width="2.2" stroke-linecap="round" />

  <!-- Arrowhead at (967, 104) -->
  <path d="M 946 109 L 968 103 L 956 123 Z" fill="#B87320" />

  <!-- STEP 1: Understand -->
  <!-- Stalk & Dot -->
  <line x1="353" y1="300" x2="353" y2="367" stroke="#B87320" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.85" />
  <circle cx="353" cy="367" r="4.5" fill="#B87320" stroke="#FAF4ED" stroke-width="2" />
  <!-- Badge -->
  <g filter="url(#badgeShadow)">
    <circle cx="374" cy="222" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
    <circle cx="374" cy="222" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
    <!-- Search Icon -->
    <circle cx="372" cy="220" r="5.5" stroke="#B87320" stroke-width="1.8" />
    <line x1="376" y1="224" x2="381" y2="229" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
  </g>
  <!-- Text -->
  <text x="364" y="270" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" fill="#22201F">Understand</text>
  <text x="364" y="288" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="400" fill="#554F49">
    <tspan x="364" dy="0">Identify the clinic's</tspan>
    <tspan x="364" dy="15">challenges and</tspan>
    <tspan x="364" dy="15">opportunities.</tspan>
  </text>

  <!-- STEP 2: Plan -->
  <!-- Stalk & Dot -->
  <line x1="519" y1="230" x2="519" y2="326" stroke="#B87320" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.85" />
  <circle cx="519" cy="326" r="4.5" fill="#B87320" stroke="#FAF4ED" stroke-width="2" />
  <!-- Badge -->
  <g filter="url(#badgeShadow)">
    <circle cx="541" cy="171" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
    <circle cx="541" cy="171" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
    <!-- Lightbulb Icon -->
    <path d="M 538 177 L 544 177 M 539 179 L 543 179 M 541 163 C 537 163, 534 166, 534 170 C 534 172, 536 174, 538 175 L 538 176 L 544 176 L 544 175 C 546 174, 548 172, 548 170 C 548 166, 545 163, 541 163 Z" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <!-- Text -->
  <text x="528" y="220" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" fill="#22201F">Plan</text>
  <text x="528" y="238" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="400" fill="#554F49">
    <tspan x="528" dy="0">Create a practical</tspan>
    <tspan x="528" dy="15">digital growth</tspan>
    <tspan x="528" dy="15">strategy.</tspan>
  </text>

  <!-- STEP 3: Implement -->
  <!-- Stalk & Dot -->
  <line x1="679" y1="180" x2="679" y2="278" stroke="#B87320" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.85" />
  <circle cx="679" cy="278" r="4.5" fill="#B87320" stroke="#FAF4ED" stroke-width="2" />
  <!-- Badge -->
  <g filter="url(#badgeShadow)">
    <circle cx="702" cy="125" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
    <circle cx="702" cy="125" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
    <!-- Gear Icon -->
    <circle cx="702" cy="125" r="4" stroke="#B87320" stroke-width="1.6" />
    <path d="M 702 117 L 702 120 M 702 130 L 702 133 M 694 125 L 697 125 M 707 125 L 710 125 M 696 119 L 698 121 M 706 129 L 708 131 M 696 131 L 698 129 M 706 121 L 708 119" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
  </g>
  <!-- Text -->
  <text x="686" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" fill="#22201F">Implement</text>
  <text x="686" y="192" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="400" fill="#554F49">
    <tspan x="686" dy="0">Set up the right</tspan>
    <tspan x="686" dy="15">digital tools</tspan>
    <tspan x="686" dy="15">and systems.</tspan>
  </text>

  <!-- STEP 4: Grow -->
  <!-- Stalk & Dot -->
  <line x1="846" y1="125" x2="846" y2="172" stroke="#B87320" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.85" />
  <circle cx="846" cy="172" r="4.5" fill="#B87320" stroke="#FAF4ED" stroke-width="2" />
  <!-- Badge -->
  <g filter="url(#badgeShadow)">
    <circle cx="864" cy="73" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
    <circle cx="864" cy="73" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
    <!-- Bar Chart + Arrow -->
    <line x1="858" y1="77" x2="858" y2="79" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
    <line x1="862" y1="74" x2="862" y2="79" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
    <line x1="866" y1="71" x2="866" y2="79" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
    <line x1="870" y1="67" x2="870" y2="79" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
    <path d="M 856 73 C 860 72, 866 69, 871 64" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" />
    <path d="M 867 64 L 872 64 L 872 69" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <!-- Title ABOVE curve -->
  <text x="848" y="122" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" fill="#22201F">Grow</text>
  <!-- Description BELOW curve -->
  <text x="848" y="200" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="400" fill="#554F49">
    <tspan x="848" dy="0">Improve visibility,</tspan>
    <tspan x="848" dy="15">patient engagement,</tspan>
    <tspan x="848" dy="15">and long-term growth.</tspan>
  </text>

  <!-- FLOWING METALLIC GOLD WAVE ACROSS THE BOTTOM -->
  <!-- Coordinates matching photo2: (0, 363), (120, 389), (360, 436), (500, 420), (700, 440), (840, 398), (1024, 350) -->
  <path d="M 0 363 C 140 370, 240 436, 420 436 C 540 436, 620 435, 720 440 C 820 445, 920 380, 1024 350 L 1024 450 L 0 450 Z"
        fill="url(#waveDarkFill)" />
  <path d="M 0 363 C 140 370, 240 436, 420 436 C 540 436, 620 435, 720 440 C 820 445, 920 380, 1024 350"
        stroke="url(#waveGoldRim)" stroke-width="4.5" stroke-linecap="round" />
</svg>`;

sharp(Buffer.from(svg))
  .png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68/test-master-svg.png')
  .then(() => console.log('Master SVG rendered to test-master-svg.png!'));

const sharp = require('sharp');
const dir = 'C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68';

// Full 1440px section composition
const width = 1440;
const height = 620;

// Content grid bounds: w = 1440 * 0.9 = 1296px, margin = 72px
// Left Column: 72 to 500 (width = 428px)
// Right Column: 540 to 1368 (width = 828px)

const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldCurve" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D49A4B" />
      <stop offset="50%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#9B5D14" />
    </linearGradient>

    <linearGradient id="waveGoldRim" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8C5317" />
      <stop offset="18%" stop-color="#E5B869" />
      <stop offset="35%" stop-color="#FFE4AC" />
      <stop offset="55%" stop-color="#B87320" />
      <stop offset="75%" stop-color="#E5B869" />
      <stop offset="90%" stop-color="#FFE4AC" />
      <stop offset="100%" stop-color="#8C5317" />
    </linearGradient>

    <linearGradient id="waveDarkFill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#241E1A" />
      <stop offset="35%" stop-color="#181412" />
      <stop offset="100%" stop-color="#0E0C0A" />
    </linearGradient>

    <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#000000" flood-opacity="0.08" />
    </filter>

    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#945812" />
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="#FAF4ED" />

  <!-- ========================================================= -->
  <!-- LEFT COLUMN: Starts at x = 72                             -->
  <!-- ========================================================= -->
  <text x="72" y="140" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="0.24em" fill="#3F3A36">MY APPROACH</text>
  <line x1="184" y1="136" x2="232" y2="136" stroke="#B87320" stroke-width="2.2" stroke-linecap="round" />

  <text x="72" y="196" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="38" font-weight="800" fill="#22201F" letter-spacing="-0.03em">From Digital Presence to</text>
  <text x="72" y="244" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="38" font-weight="800" fill="#B87320" letter-spacing="-0.03em">Patient Growth.</text>

  <text x="72" y="295" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="400" fill="#554F49">
    <tspan x="72" dy="0">A simple and practical approach to help clinics</tspan>
    <tspan x="72" dy="24">build, streamline, and grow their digital presence.</tspan>
  </text>

  <g cursor="pointer">
    <rect x="72" y="360" width="160" height="48" rx="24" fill="url(#btnGrad)" filter="url(#badgeShadow)" />
    <text x="102" y="390" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">My Approach</text>
    <path d="M 200 385 L 208 385 M 204 381 L 208 385 L 204 389" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- ========================================================= -->
  <!-- RIGHT COLUMN: Starts at x = 550, Width = 840, Height = 390-->
  <!-- ========================================================= -->
  <g transform="translate(550, 40)">
    <!-- Trajectory Curve -->
    <path d="M 30 345 C 65 340, 85 325, 110 320 C 175 310, 240 278, 300 265 C 370 250, 430 215, 490 200 C 560 180, 625 140, 680 125 C 730 110, 775 80, 815 55"
          stroke="url(#goldCurve)" stroke-width="2.6" stroke-linecap="round" />

    <!-- Arrow -->
    <path d="M 796 64 L 820 54 L 808 81 L 803 69 Z" fill="#B87320" />

    <!-- STEP 1: Understand -->
    <g>
      <line x1="110" y1="210" x2="110" y2="320" stroke="#B87320" stroke-width="1.4" />
      <circle cx="110" cy="320" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
      <g filter="url(#badgeShadow)">
        <circle cx="135" cy="160" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
        <circle cx="135" cy="160" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
        <circle cx="133" cy="158" r="6" stroke="#B87320" stroke-width="1.8" fill="none" />
        <line x1="137" y1="162" x2="143" y2="168" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
      </g>
      <text x="120" y="215" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Understand</text>
      <text x="120" y="235" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
        <tspan x="120" dy="0">Identify the clinic's</tspan>
        <tspan x="120" dy="17">challenges and</tspan>
        <tspan x="120" dy="17">opportunities.</tspan>
      </text>
    </g>

    <!-- STEP 2: Plan -->
    <g>
      <line x1="300" y1="155" x2="300" y2="265" stroke="#B87320" stroke-width="1.4" />
      <circle cx="300" cy="265" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
      <g filter="url(#badgeShadow)">
        <circle cx="325" cy="105" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
        <circle cx="325" cy="105" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
        <path d="M 322 111 L 328 111 M 323 113 L 327 113 M 325 97 C 321 97, 318 100, 318 104 C 318 106, 320 108, 322 109 L 322 110 L 328 110 L 328 109 C 330 108, 332 106, 332 104 C 332 100, 329 97, 325 97 Z" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <line x1="325" y1="92" x2="325" y2="94" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
        <line x1="317" y1="95" x2="319" y2="97" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
        <line x1="333" y1="95" x2="331" y2="97" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
      </g>
      <text x="310" y="160" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Plan</text>
      <text x="310" y="180" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
        <tspan x="310" dy="0">Create a practical</tspan>
        <tspan x="310" dy="17">digital growth</tspan>
        <tspan x="310" dy="17">strategy.</tspan>
      </text>
    </g>

    <!-- STEP 3: Implement -->
    <g>
      <line x1="490" y1="95" x2="490" y2="200" stroke="#B87320" stroke-width="1.4" />
      <circle cx="490" cy="200" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
      <g filter="url(#badgeShadow)">
        <circle cx="515" cy="50" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
        <circle cx="515" cy="50" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
        <circle cx="515" cy="50" r="4.5" stroke="#B87320" stroke-width="1.6" fill="none" />
        <path d="M 515 41 L 515 44 M 515 56 L 515 59 M 506 50 L 509 50 M 521 50 L 524 50 M 508 43 L 511 46 M 519 54 L 522 57 M 508 57 L 511 54 M 519 46 L 522 43" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
      </g>
      <text x="500" y="100" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Implement</text>
      <text x="500" y="120" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
        <tspan x="500" dy="0">Set up the right</tspan>
        <tspan x="500" dy="17">digital tools</tspan>
        <tspan x="500" dy="17">and systems.</tspan>
      </text>
    </g>

    <!-- STEP 4: Grow -->
    <g>
      <line x1="680" y1="45" x2="680" y2="125" stroke="#B87320" stroke-width="1.4" />
      <circle cx="680" cy="125" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
      <g filter="url(#badgeShadow)">
        <circle cx="705" cy="28" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
        <circle cx="705" cy="28" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
        <line x1="699" y1="32" x2="699" y2="34" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
        <line x1="703" y1="29" x2="703" y2="34" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
        <line x1="707" y1="26" x2="707" y2="34" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
        <line x1="711" y1="22" x2="711" y2="34" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
        <path d="M 697 28 C 701 27, 707 24, 712 19" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <path d="M 708 19 L 713 19 L 713 24" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>
      <text x="690" y="48" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Grow</text>
      <text x="690" y="68" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
        <tspan x="690" dy="0">Improve visibility,</tspan>
        <tspan x="690" dy="17">patient engagement,</tspan>
        <tspan x="690" dy="17">and long-term growth.</tspan>
      </text>
    </g>
  </g>

  <!-- ========================================================= -->
  <!-- FULL-WIDTH BOTTOM WAVE: Spans 0 to 1440 Edge-to-Edge      -->
  <!-- ========================================================= -->
  <path d="M 0 520 C 180 535, 340 605, 530 605 C 720 605, 870 580, 1010 580 C 1170 580, 1310 510, 1440 480 L 1440 620 L 0 620 Z" fill="url(#waveDarkFill)" />
  <path d="M 0 520 C 180 535, 340 605, 530 605 C 720 605, 870 580, 1010 580 C 1170 580, 1310 510, 1440 480" stroke="url(#waveGoldRim)" stroke-width="4.5" stroke-linecap="round" />
</svg>`;

sharp(Buffer.from(svg))
  .png().toFile(dir + '/test-full-section.png')
  .then(() => console.log('Saved test-full-section.png'));

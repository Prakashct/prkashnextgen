const sharp = require('sharp');
const dir = 'C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68';
const refPath = dir + '/.user_uploaded/media_1794285077185_e32fc769.jpg';

const curveD = 'M 230 448 C 265 435, 305 422, 345 421 C 395 422, 455 408, 505 380 C 555 360, 615 344, 664 336 C 715 328, 770 298, 827 267 C 870 258, 925 240, 975 219';

const waveRim = 'M 0 458 C 140 475, 260 562, 384 564 C 450 565, 480 522, 544 522 C 608 522, 640 544, 704 546 C 800 548, 910 470, 1024 430';
const waveFill = 'M 0 458 C 140 475, 260 562, 384 564 C 450 565, 480 522, 544 522 C 608 522, 640 544, 704 546 C 800 548, 910 470, 1024 430 L 1024 576 L 0 576 Z';

const svg = `<svg width="1024" height="576" viewBox="0 0 1024 576" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <stop offset="40%" stop-color="#181412" />
      <stop offset="100%" stop-color="#0E0C0A" />
    </linearGradient>

    <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#000000" flood-opacity="0.07" />
    </filter>

    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#945812" />
    </linearGradient>
  </defs>

  <rect width="1024" height="576" fill="#FAF4ED" />

  <!-- Left Column: Eyebrow, Headings, CTA Button -->
  <text x="58" y="152" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.25em" fill="#3F3A36">MY APPROACH</text>
  <line x1="156" y1="148" x2="198" y2="148" stroke="#B87320" stroke-width="2" stroke-linecap="round" />

  <text x="58" y="202" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="800" fill="#22201F" letter-spacing="-0.03em">From Digital Presence to</text>
  <text x="58" y="244" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="800" fill="#B87320" letter-spacing="-0.03em">Patient Growth.</text>

  <text x="58" y="290" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13.5" font-weight="400" fill="#554F49">
    <tspan x="58" dy="0">A simple and practical approach to help clinics</tspan>
    <tspan x="58" dy="21">build, streamline, and grow their digital presence.</tspan>
  </text>

  <g cursor="pointer">
    <rect x="58" y="348" width="148" height="46" rx="23" fill="url(#btnGrad)" filter="url(#badgeShadow)" />
    <text x="86" y="377" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">My Approach</text>
    <path d="M 178 373 L 185 373 M 181 370 L 185 373 L 181 376" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- Ascending Curve -->
  <path d="${curveD}" stroke="url(#goldCurve)" stroke-width="2.6" stroke-linecap="round" />

  <!-- Arrow -->
  <path d="M 956 216 L 991 208 L 973 241 L 966 226 Z" fill="#B87320" />

  <!-- Step 1: Understand (Badge: 366, 292 | Stalk: x=345 | Dot: 345, 421) -->
  <g>
    <line x1="345" y1="340" x2="345" y2="421" stroke="#B87320" stroke-width="1.4" />
    <circle cx="345" cy="421" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
    <g filter="url(#badgeShadow)">
      <circle cx="366" cy="292" r="24" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="366" cy="292" r="27" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <circle cx="364" cy="290" r="6" stroke="#B87320" stroke-width="1.8" fill="none" />
      <line x1="368" y1="294" x2="374" y2="300" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
    </g>
    <text x="354" y="342" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Understand</text>
    <text x="354" y="362" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="354" dy="0">Identify the clinic's</tspan>
      <tspan x="354" dy="16">challenges and</tspan>
      <tspan x="354" dy="16">opportunities.</tspan>
    </text>
  </g>

  <!-- Step 2: Plan (Badge: 530, 221 | Stalk: x=505 | Dot: 505, 380) -->
  <g>
    <line x1="505" y1="268" x2="505" y2="380" stroke="#B87320" stroke-width="1.4" />
    <circle cx="505" cy="380" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
    <g filter="url(#badgeShadow)">
      <circle cx="530" cy="221" r="24" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="530" cy="221" r="27" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <path d="M 527 227 L 533 227 M 528 229 L 532 229 M 530 213 C 526 213, 523 216, 523 220 C 523 222, 525 224, 527 225 L 527 226 L 533 226 L 533 225 C 535 224, 537 222, 537 220 C 537 216, 534 213, 530 213 Z" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <line x1="530" y1="208" x2="530" y2="210" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
      <line x1="522" y1="211" x2="524" y2="213" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
      <line x1="538" y1="211" x2="536" y2="213" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
    </g>
    <text x="515" y="272" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Plan</text>
    <text x="515" y="292" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="515" dy="0">Create a practical</tspan>
      <tspan x="515" dy="16">digital growth</tspan>
      <tspan x="515" dy="16">strategy.</tspan>
    </text>
  </g>

  <!-- Step 3: Implement (Badge: 687, 166 | Stalk: x=664 | Dot: 664, 336) -->
  <g>
    <line x1="664" y1="216" x2="664" y2="336" stroke="#B87320" stroke-width="1.4" />
    <circle cx="664" cy="336" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
    <g filter="url(#badgeShadow)">
      <circle cx="687" cy="166" r="24" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="687" cy="166" r="27" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <circle cx="687" cy="166" r="4.5" stroke="#B87320" stroke-width="1.6" fill="none" />
      <path d="M 687 157 L 687 160 M 687 172 L 687 175 M 678 166 L 681 166 M 693 166 L 696 166 M 680 159 L 683 162 M 691 170 L 694 173 M 680 173 L 683 170 M 691 162 L 694 159" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
    </g>
    <text x="674" y="218" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Implement</text>
    <text x="674" y="238" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="674" dy="0">Set up the right</tspan>
      <tspan x="674" dy="16">digital tools</tspan>
      <tspan x="674" dy="16">and systems.</tspan>
    </text>
  </g>

  <!-- Step 4: Grow (Badge: 853, 106 | Stalk: x=827 | Dot: 827, 267) -->
  <g>
    <line x1="827" y1="152" x2="827" y2="267" stroke="#B87320" stroke-width="1.4" />
    <circle cx="827" cy="267" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
    <g filter="url(#badgeShadow)">
      <circle cx="853" cy="106" r="24" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="853" cy="106" r="27" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <line x1="847" y1="110" x2="847" y2="112" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <line x1="851" y1="107" x2="851" y2="112" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <line x1="855" y1="104" x2="855" y2="112" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <line x1="859" y1="100" x2="859" y2="112" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <path d="M 845 106 C 849 105, 855 102, 860 97" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" fill="none" />
      <path d="M 856 97 L 861 97 L 861 102" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </g>
    <text x="837" y="152" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Grow</text>
    <text x="837" y="172" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="837" dy="0">Improve visibility,</tspan>
      <tspan x="837" dy="16">patient engagement,</tspan>
      <tspan x="837" dy="16">and long-term growth.</tspan>
    </text>
  </g>

  <!-- Bottom Wave -->
  <path d="${waveFill}" fill="url(#waveDarkFill)" />
  <path d="${waveRim}" stroke="url(#waveGoldRim)" stroke-width="4.5" stroke-linecap="round" />
</svg>`;

async function renderAndCompare() {
  const genBuf = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(genBuf).toFile(dir + '/test-576-perfect.png');
  console.log('Saved test-576-perfect.png');

  const pRef = await sharp(refPath).resize(800, 450).toBuffer();
  const pGen = await sharp(genBuf).resize(800, 450).toBuffer();

  const canvas = sharp({
    create: { width: 800, height: 906, channels: 4, background: '#ffffff' }
  });

  await canvas.composite([
    { input: pRef, top: 0, left: 0 },
    { input: pGen, top: 456, left: 0 }
  ]).png().toFile(dir + '/compare-perfect-576.png');
  console.log('Saved compare-perfect-576.png');
}
renderAndCompare();

const sharp = require('sharp');
const fs = require('fs');

const svg = `<svg width="1024" height="576" viewBox="0 0 1024 576" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Trajectory Curve Gold Gradient -->
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

    <!-- Dark Wave Body Fill -->
    <linearGradient id="waveDarkFill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#241E1A" />
      <stop offset="40%" stop-color="#181412" />
      <stop offset="100%" stop-color="#0E0C0A" />
    </linearGradient>

    <!-- Soft Drop Shadow for Circular Badges -->
    <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#000000" flood-opacity="0.07" />
    </filter>

    <!-- Button Gradient -->
    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#945812" />
    </linearGradient>
  </defs>

  <!-- Background Warm Cream -->
  <rect width="1024" height="576" fill="#FAF4ED" />

  <!-- ===================================================== -->
  <!-- LEFT COLUMN: Headings & CTA Button                    -->
  <!-- ===================================================== -->
  <!-- Eyebrow: MY APPROACH -->
  <text x="58" y="152" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.25em" fill="#3F3A36">MY APPROACH</text>
  <line x1="156" y1="148" x2="198" y2="148" stroke="#B87320" stroke-width="2" stroke-linecap="round" />

  <!-- Main Heading -->
  <text x="58" y="202" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="800" fill="#22201F" letter-spacing="-0.03em">From Digital Presence to</text>
  <text x="58" y="244" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="800" fill="#B87320" letter-spacing="-0.03em">Patient Growth.</text>

  <!-- Subtitle Description -->
  <text x="58" y="290" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13.5" font-weight="400" fill="#554F49">
    <tspan x="58" dy="0">A simple and practical approach to help clinics</tspan>
    <tspan x="58" dy="21">build, streamline, and grow their digital presence.</tspan>
  </text>

  <!-- CTA Button: My Approach -> -->
  <g cursor="pointer">
    <rect x="58" y="348" width="148" height="46" rx="23" fill="url(#btnGrad)" filter="url(#badgeShadow)" />
    <text x="86" y="377" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">My Approach</text>
    <path d="M 178 373 L 185 373 M 181 370 L 185 373 L 181 376" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- ===================================================== -->
  <!-- ASCENDING GOLD TRAJECTORY CURVE                       -->
  <!-- Passes through (345, 421) -> (505, 380) ->            -->
  <!-- (664, 336) -> (827, 267) -> (982, 211)                -->
  <!-- ===================================================== -->
  <path d="M 235 432 C 285 432, 315 421, 345 421 C 410 421, 460 392, 505 380 C 570 364, 615 344, 664 336 C 730 324, 785 285, 827 267 C 880 245, 935 228, 982 211"
        stroke="url(#goldCurve)" stroke-width="2.6" stroke-linecap="round" />

  <!-- Arrowhead at (982, 211) -->
  <path d="M 960 215 L 984 210 L 970 230 Z" fill="#B87320" />

  <!-- ===================================================== -->
  <!-- STEP 1: Understand (Badge: 367,287 | Dot: 345,421)    -->
  <!-- ===================================================== -->
  <g cursor="default">
    <!-- Stalk & Dot on the curve -->
    <line x1="345" y1="340" x2="345" y2="421" stroke="#B87320" stroke-width="1.4" />
    <circle cx="345" cy="421" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />

    <!-- Circular Badge with Search Icon -->
    <g filter="url(#badgeShadow)">
      <circle cx="367" cy="287" r="24" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="367" cy="287" r="27" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <circle cx="365" cy="285" r="6" stroke="#B87320" stroke-width="1.8" />
      <line x1="369" y1="289" x2="375" y2="295" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
    </g>

    <!-- Title & Description to the right of stalk -->
    <text x="354" y="338" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Understand</text>
    <text x="354" y="358" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="354" dy="0">Identify the clinic's</tspan>
      <tspan x="354" dy="16">challenges and</tspan>
      <tspan x="354" dy="16">opportunities.</tspan>
    </text>
  </g>

  <!-- ===================================================== -->
  <!-- STEP 2: Plan (Badge: 529,205 | Dot: 505,380)          -->
  <!-- ===================================================== -->
  <g cursor="default">
    <!-- Stalk & Dot on the curve -->
    <line x1="505" y1="260" x2="505" y2="380" stroke="#B87320" stroke-width="1.4" />
    <circle cx="505" cy="380" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />

    <!-- Circular Badge with Lightbulb Icon -->
    <g filter="url(#badgeShadow)">
      <circle cx="529" cy="205" r="24" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="529" cy="205" r="27" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <!-- Lightbulb Icon with rays -->
      <path d="M 526 211 L 532 211 M 527 213 L 531 213 M 529 197 C 525 197, 522 200, 522 204 C 522 206, 524 208, 526 209 L 526 210 L 532 210 L 532 209 C 534 208, 536 206, 536 204 C 536 200, 533 197, 529 197 Z" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="529" y1="192" x2="529" y2="194" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
      <line x1="521" y1="195" x2="523" y2="197" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
      <line x1="537" y1="195" x2="535" y2="197" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" />
    </g>

    <!-- Title & Description to the right of stalk -->
    <text x="515" y="256" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Plan</text>
    <text x="515" y="276" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="515" dy="0">Create a practical</tspan>
      <tspan x="515" dy="16">digital growth</tspan>
      <tspan x="515" dy="16">strategy.</tspan>
    </text>
  </g>

  <!-- ===================================================== -->
  <!-- STEP 3: Implement (Badge: 687,151 | Dot: 664,336)     -->
  <!-- ===================================================== -->
  <g cursor="default">
    <!-- Stalk & Dot on the curve -->
    <line x1="664" y1="210" x2="664" y2="336" stroke="#B87320" stroke-width="1.4" />
    <circle cx="664" cy="336" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />

    <!-- Circular Badge with Gear Icon -->
    <g filter="url(#badgeShadow)">
      <circle cx="687" cy="151" r="24" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="687" cy="151" r="27" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <!-- Gear Icon -->
      <circle cx="687" cy="151" r="4.5" stroke="#B87320" stroke-width="1.6" />
      <path d="M 687 142 L 687 145 M 687 157 L 687 160 M 678 151 L 681 151 M 693 151 L 696 151 M 680 144 L 683 147 M 691 155 L 694 158 M 680 158 L 683 155 M 691 147 L 694 144" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
    </g>

    <!-- Title & Description to the right of stalk -->
    <text x="674" y="202" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Implement</text>
    <text x="674" y="222" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="674" dy="0">Set up the right</tspan>
      <tspan x="674" dy="16">digital tools</tspan>
      <tspan x="674" dy="16">and systems.</tspan>
    </text>
  </g>

  <!-- ===================================================== -->
  <!-- STEP 4: Grow (Badge: 855,87 | Dot: 827,267)           -->
  <!-- ===================================================== -->
  <g cursor="default">
    <!-- Stalk & Dot on the curve -->
    <line x1="827" y1="145" x2="827" y2="267" stroke="#B87320" stroke-width="1.4" />
    <circle cx="827" cy="267" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />

    <!-- Circular Badge with Bar Chart + Arrow -->
    <g filter="url(#badgeShadow)">
      <circle cx="855" cy="87" r="24" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
      <circle cx="855" cy="87" r="27" fill="none" stroke="#FAF4ED" stroke-width="3" />
      <!-- Bar chart with arrow -->
      <line x1="849" y1="91" x2="849" y2="93" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <line x1="853" y1="88" x2="853" y2="93" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <line x1="857" y1="85" x2="857" y2="93" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <line x1="861" y1="81" x2="861" y2="93" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
      <path d="M 847 87 C 851 86, 857 83, 862 78" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" />
      <path d="M 858 78 L 863 78 L 863 83" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <!-- Title & Description to the right of stalk, ALL ABOVE CURVE -->
    <text x="837" y="138" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14.5" font-weight="700" fill="#22201F">Grow</text>
    <text x="837" y="158" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11.5" font-weight="400" fill="#554F49">
      <tspan x="837" dy="0">Improve visibility,</tspan>
      <tspan x="837" dy="16">patient engagement,</tspan>
      <tspan x="837" dy="16">and long-term growth.</tspan>
    </text>
  </g>

  <!-- ===================================================== -->
  <!-- FULL-WIDTH FLOWING METALLIC GOLD WAVE ACROSS BOTTOM   -->
  <!-- ===================================================== -->
  <path d="M 0 459 C 120 470, 220 540, 380 540 C 520 540, 620 520, 720 540 C 820 550, 920 480, 1024 435 L 1024 576 L 0 576 Z"
        fill="url(#waveDarkFill)" />
  <path d="M 0 459 C 120 470, 220 540, 380 540 C 520 540, 620 520, 720 540 C 820 550, 920 480, 1024 435"
        stroke="url(#waveGoldRim)" stroke-width="4.5" stroke-linecap="round" />
</svg>`;

sharp(Buffer.from(svg))
  .png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68/test-576.png')
  .then(() => console.log('Exact 576 SVG rendered!'));

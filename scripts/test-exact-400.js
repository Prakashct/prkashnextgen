const sharp = require('sharp');
const fs = require('fs');

const svg = `<svg width="1024" height="400" viewBox="0 0 1024 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Curve Gradient -->
    <linearGradient id="goldCurve" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D49A4B" />
      <stop offset="50%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#9B5D14" />
    </linearGradient>

    <!-- Metallic Rim Gradient -->
    <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8C5317" />
      <stop offset="25%" stop-color="#E5B869" />
      <stop offset="50%" stop-color="#FFE4AC" />
      <stop offset="75%" stop-color="#D49842" />
      <stop offset="100%" stop-color="#8C5317" />
    </linearGradient>

    <!-- Dark Corner Fill -->
    <linearGradient id="darkCornerFill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#241E1A" />
      <stop offset="50%" stop-color="#181412" />
      <stop offset="100%" stop-color="#0E0C0A" />
    </linearGradient>

    <!-- Drop Shadow for Badges -->
    <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000000" flood-opacity="0.06" />
    </filter>

    <!-- Button Gradient -->
    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B87320" />
      <stop offset="100%" stop-color="#945812" />
    </linearGradient>
  </defs>

  <!-- Background Warm Cream -->
  <rect width="1024" height="400" fill="#FAF4ED" />

  <!-- LEFT COLUMN -->
  <!-- Eyebrow: MY APPROACH -->
  <text x="40" y="60" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="10.5" font-weight="700" letter-spacing="0.25em" fill="#3F3A36">MY APPROACH</text>
  <line x1="140" y1="56.5" x2="182" y2="56.5" stroke="#B87320" stroke-width="2" stroke-linecap="round" />

  <!-- Heading -->
  <text x="40" y="104" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="32" font-weight="800" fill="#22201F" letter-spacing="-0.03em">From Digital Presence to</text>
  <text x="40" y="140" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="32" font-weight="800" fill="#B87320" letter-spacing="-0.03em">Patient Growth.</text>

  <!-- Description -->
  <text x="40" y="178" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="12.5" font-weight="400" fill="#554F49">
    <tspan x="40" dy="0">A simple and practical approach to help clinics</tspan>
    <tspan x="40" dy="18">build, streamline, and grow their digital presence.</tspan>
  </text>

  <!-- CTA Button -->
  <g cursor="pointer">
    <rect x="40" y="224" width="144" height="44" rx="22" fill="url(#btnGrad)" filter="url(#badgeShadow)" />
    <text x="68" y="251" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13.5" font-weight="700" fill="#FFFFFF">My Approach</text>
    <path d="M 157 247 L 164 247 M 160 244 L 164 247 L 160 250" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- ASCENDING GOLD TRAJECTORY CURVE -->
  <!-- Coordinates: (245, 372) -> (331, 365) -> (489, 327) -> (648, 279) -> (827, 169) -> (934, 106) -->
  <path d="M 245 372 C 285 372, 310 365, 331 365 C 395 365, 440 338, 489 327 C 555 311, 600 289, 648 279 C 720 264, 785 198, 827 169 C 865 142, 900 120, 946 101"
        stroke="url(#goldCurve)" stroke-width="2.4" stroke-linecap="round" />

  <!-- Arrowhead at (946, 101) -->
  <path d="M 925 106 L 948 100 L 936 120 Z" fill="#B87320" />

  <!-- STEP 1: Understand -->
  <!-- Stalk & Dot -->
  <line x1="331" y1="285" x2="331" y2="365" stroke="#B87320" stroke-width="1.4" stroke-dasharray="2.5 2.5" />
  <circle cx="331" cy="365" r="4.5" fill="#B87320" stroke="#FAF4ED" stroke-width="2" />
  <!-- Badge at (355, 205) -->
  <g filter="url(#badgeShadow)">
    <circle cx="355" cy="205" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
    <circle cx="355" cy="205" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
    <!-- Search Icon -->
    <circle cx="353" cy="203" r="5.5" stroke="#B87320" stroke-width="1.8" />
    <line x1="357" y1="207" x2="362" y2="212" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
  </g>
  <!-- Text -->
  <text x="342" y="254" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13.5" font-weight="700" fill="#22201F">Understand</text>
  <text x="342" y="272" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="400" fill="#554F49">
    <tspan x="342" dy="0">Identify the clinic's</tspan>
    <tspan x="342" dy="15">challenges and</tspan>
    <tspan x="342" dy="15">opportunities.</tspan>
  </text>

  <!-- STEP 2: Plan -->
  <!-- Stalk & Dot -->
  <line x1="489" y1="225" x2="489" y2="327" stroke="#B87320" stroke-width="1.4" stroke-dasharray="2.5 2.5" />
  <circle cx="489" cy="327" r="4.5" fill="#B87320" stroke="#FAF4ED" stroke-width="2" />
  <!-- Badge at (520, 150) -->
  <g filter="url(#badgeShadow)">
    <circle cx="520" cy="150" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
    <circle cx="520" cy="150" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
    <!-- Lightbulb Icon -->
    <path d="M 517 156 L 523 156 M 518 158 L 522 158 M 520 142 C 516 142, 513 145, 513 149 C 513 151, 515 153, 517 154 L 517 155 L 523 155 L 523 154 C 525 153, 527 151, 527 149 C 527 145, 524 142, 520 142 Z" stroke="#B87320" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <!-- Text -->
  <text x="498" y="199" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13.5" font-weight="700" fill="#22201F">Plan</text>
  <text x="498" y="217" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="400" fill="#554F49">
    <tspan x="498" dy="0">Create a practical</tspan>
    <tspan x="498" dy="15">digital growth</tspan>
    <tspan x="498" dy="15">strategy.</tspan>
  </text>

  <!-- STEP 3: Implement -->
  <!-- Stalk & Dot -->
  <line x1="648" y1="175" x2="648" y2="279" stroke="#B87320" stroke-width="1.4" stroke-dasharray="2.5 2.5" />
  <circle cx="648" cy="279" r="4.5" fill="#B87320" stroke="#FAF4ED" stroke-width="2" />
  <!-- Badge at (682, 105) -->
  <g filter="url(#badgeShadow)">
    <circle cx="682" cy="105" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
    <circle cx="682" cy="105" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
    <!-- Gear Icon -->
    <circle cx="682" cy="105" r="4" stroke="#B87320" stroke-width="1.6" />
    <path d="M 682 97 L 682 100 M 682 110 L 682 113 M 674 105 L 677 105 M 687 105 L 690 105 M 676 99 L 678 101 M 686 109 L 688 111 M 676 111 L 678 109 M 686 101 L 688 99" stroke="#B87320" stroke-width="1.8" stroke-linecap="round" />
  </g>
  <!-- Text -->
  <text x="654" y="154" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13.5" font-weight="700" fill="#22201F">Implement</text>
  <text x="654" y="172" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="400" fill="#554F49">
    <tspan x="654" dy="0">Set up the right</tspan>
    <tspan x="654" dy="15">digital tools</tspan>
    <tspan x="654" dy="15">and systems.</tspan>
  </text>

  <!-- STEP 4: Grow -->
  <!-- Stalk through Dot at (827, 169) -->
  <line x1="827" y1="108" x2="827" y2="169" stroke="#B87320" stroke-width="1.4" stroke-dasharray="2.5 2.5" />
  <circle cx="827" cy="169" r="4.5" fill="#B87320" stroke="#FAF4ED" stroke-width="2" />
  <!-- Badge at (845, 55) -->
  <g filter="url(#badgeShadow)">
    <circle cx="845" cy="55" r="23" fill="#FFFFFF" stroke="#EFE5D8" stroke-width="1" />
    <circle cx="845" cy="55" r="26" fill="none" stroke="#FAF4ED" stroke-width="3" />
    <!-- Bar Chart + Arrow -->
    <line x1="839" y1="59" x2="839" y2="61" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
    <line x1="843" y1="56" x2="843" y2="61" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
    <line x1="847" y1="53" x2="847" y2="61" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
    <line x1="851" y1="49" x2="851" y2="61" stroke="#B87320" stroke-width="2" stroke-linecap="round" />
    <path d="M 837 55 C 841 54, 847 51, 852 46" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" />
    <path d="M 848 46 L 853 46 L 853 51" stroke="#B87320" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <!-- TITLE 'Grow' IS UPPER (ABOVE THE LINE AT y=169) -->
  <text x="828" y="104" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13.5" font-weight="700" fill="#22201F">Grow</text>

  <!-- DESCRIPTION IS LOWER (COMPLETELY BELOW THE LINE AT y=169) -->
  <text x="828" y="196" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="400" fill="#554F49">
    <tspan x="828" dy="0">Improve visibility,</tspan>
    <tspan x="828" dy="15">patient engagement,</tspan>
    <tspan x="828" dy="15">and long-term growth.</tspan>
  </text>

  <!-- BOTTOM CORNER ACCENTS (Matching the Reference Image exactly) -->
  <!-- Bottom-Left dark corner wedge with gold rim -->
  <path d="M 0 350 Q 80 370 190 400 L 0 400 Z" fill="url(#darkCornerFill)" />
  <path d="M 0 350 Q 80 370 190 400" stroke="url(#goldRimGrad)" stroke-width="3.5" stroke-linecap="round" />

  <!-- Bottom-Right dark corner wedge with gold rim -->
  <path d="M 860 400 Q 940 370 1024 330 L 1024 400 Z" fill="url(#darkCornerFill)" />
  <path d="M 860 400 Q 940 370 1024 330" stroke="url(#goldRimGrad)" stroke-width="3.5" stroke-linecap="round" />
</svg>`;

sharp(Buffer.from(svg))
  .png().toFile('C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68/test-exact-400.png')
  .then(() => console.log('Exact 400 SVG rendered!'));

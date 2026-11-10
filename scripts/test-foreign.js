const fs = require('fs');
const { execSync } = require('child_process');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; background: #FAF4ED; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
    .badge { width: 56px; height: 56px; border-radius: 50%; background: white; border: 1px solid #EFE5D8; box-shadow: 0 4px 14px rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
    .title { font-size: 16px; font-weight: bold; color: #22201F; margin-bottom: 4px; }
    .desc { font-size: 13px; color: #554F49; line-height: 1.4; }
  </style>
</head>
<body>
  <div style="width: 960px;">
    <svg viewBox="0 0 960 400" width="100%" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="curveGold" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#D49A4B" />
          <stop offset="50%" stop-color="#B87320" />
          <stop offset="100%" stop-color="#9B5D14" />
        </linearGradient>
      </defs>

      <!-- Curve -->
      <path d="M 30 355 C 70 355, 95 345, 120 345 C 200 345, 290 295, 360 295 C 440 295, 520 240, 600 240 C 690 240, 760 135, 830 135 C 870 135, 915 95, 945 70"
            stroke="url(#curveGold)" stroke-width="2.5" stroke-linecap="round" />

      <!-- Arrow -->
      <path d="M 922 78 L 946 68 L 938 94 Z" fill="#B87320" />

      <!-- Stalks -->
      <line x1="120" y1="320" x2="120" y2="345" stroke="#B87320" stroke-width="1.5" />
      <line x1="360" y1="270" x2="360" y2="295" stroke="#B87320" stroke-width="1.5" />
      <line x1="600" y1="215" x2="600" y2="240" stroke="#B87320" stroke-width="1.5" />
      <line x1="830" y1="115" x2="830" y2="135" stroke="#B87320" stroke-width="1.5" />

      <!-- Dots -->
      <circle cx="120" cy="345" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
      <circle cx="360" cy="295" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
      <circle cx="600" cy="240" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />
      <circle cx="830" cy="135" r="5" fill="#B87320" stroke="#FAF4ED" stroke-width="2.5" />

      <!-- Step 1 HTML -->
      <foreignObject x="35" y="160" width="170" height="160">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div class="badge">🔍</div>
          <div class="title">Understand</div>
          <div class="desc">Identify the clinic's challenges and opportunities.</div>
        </div>
      </foreignObject>

      <!-- Step 2 HTML -->
      <foreignObject x="275" y="110" width="170" height="160">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div class="badge">💡</div>
          <div class="title">Plan</div>
          <div class="desc">Create a practical digital growth strategy.</div>
        </div>
      </foreignObject>

      <!-- Step 3 HTML -->
      <foreignObject x="515" y="55" width="170" height="160">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div class="badge">⚙️</div>
          <div class="title">Implement</div>
          <div class="desc">Set up the right digital tools and systems.</div>
        </div>
      </foreignObject>

      <!-- Step 4 Top HTML -->
      <foreignObject x="745" y="5" width="170" height="110">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div class="badge">📈</div>
          <div class="title">Grow</div>
        </div>
      </foreignObject>

      <!-- Step 4 Bottom HTML -->
      <foreignObject x="745" y="150" width="175" height="110">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div class="desc">Improve visibility, patient engagement, and long-term growth.</div>
        </div>
      </foreignObject>
    </svg>
  </div>
</body>
</html>`;

fs.writeFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68/test-foreign.html', html);
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
execSync(`"${chrome}" --headless=new --window-size=1200,600 --screenshot="C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68/test-foreign-render.png" "file:///C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68/test-foreign.html"`);
console.log('ForeignObject rendered to test-foreign-render.png');

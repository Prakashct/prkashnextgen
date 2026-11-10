const { spawn, execSync } = require('child_process');
const path = require('path');
const sharp = require('sharp');

const projectDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio";
const nextBin = path.join(projectDir, "node_modules", "next", "dist", "bin", "next");

console.log("Starting next dev on port 3033...");
const dev = spawn(process.execPath, [nextBin, "dev", "-p", "3033"], {
  cwd: projectDir,
  stdio: "inherit"
});

setTimeout(async () => {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const outputDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\74c12f2b-8412-49bb-9963-5c450a8cdd68";
  const approachOut = path.join(outputDir, "live-approach-1440.png");

  console.log("Taking screenshot of http://localhost:3033/#approach...");

  try {
    execSync(`"${chromePath}" --headless=new --disable-gpu --window-size=1440,3000 --screenshot="${approachOut}" "http://localhost:3033"`);
    console.log("Saved live screenshot:", approachOut);
  } catch (e) {
    console.error("Screenshot error:", e.message);
  }

  dev.kill();
  process.exit(0);
}, 7000);

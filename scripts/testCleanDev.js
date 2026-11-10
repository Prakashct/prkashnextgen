const { spawn, execSync } = require('child_process');
const path = require('path');
const sharp = require('sharp');

const projectDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio";
const nextBin = path.join(projectDir, "node_modules", "next", "dist", "bin", "next");

console.log("Starting clean next dev on port 3014...");
const dev = spawn(process.execPath, [nextBin, "dev", "-p", "3014"], {
  cwd: projectDir,
  stdio: "inherit"
});

setTimeout(async () => {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const outputDir = path.join(projectDir, "screenshots");
  const desktopOut = path.join(outputDir, "focus-desktop.png");
  const mobileOut = path.join(outputDir, "focus-mobile.png");

  console.log("Taking screenshots of http://localhost:3014...");

  try {
    execSync(`"${chromePath}" --headless=new --disable-gpu --window-size=1440,1600 --screenshot="${desktopOut}" "http://localhost:3014"`);
    console.log("Saved", desktopOut);

    execSync(`"${chromePath}" --headless=new --disable-gpu --window-size=390,1600 --screenshot="${mobileOut}" "http://localhost:3014"`);
    console.log("Saved", mobileOut);
  } catch (e) {
    console.error("Screenshot error:", e.message);
  }

  dev.kill();
  process.exit(0);
}, 8000);

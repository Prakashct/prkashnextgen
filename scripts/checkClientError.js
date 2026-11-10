const { spawn, execSync } = require('child_process');
const http = require('http');
const path = require('path');

const projectDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio";
const nextBin = path.join(projectDir, "node_modules", "next", "dist", "bin", "next");

console.log("Starting next dev...");
const dev = spawn(process.execPath, [nextBin, "dev", "-p", "3009"], {
  cwd: projectDir,
  stdio: "inherit"
});

setTimeout(async () => {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  console.log("Launching Chrome to capture console errors...");
  try {
    // Run chrome with remote debugging or headless and dump console
    const res = execSync(`"${chromePath}" --headless=new --disable-gpu --dump-dom "http://localhost:3009"`, {
      encoding: 'utf8'
    });
    console.log("DOM length:", res.length);
  } catch (e) {
    console.error("Chrome error:", e.message);
  }
  
  dev.kill();
  process.exit(0);
}, 6000);

const { spawn, execSync } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

async function capture() {
  const projectDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio";
  const outputDir = path.join(projectDir, "screenshots");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const nextBin = path.join(projectDir, "node_modules", "next", "dist", "bin", "next");
  const server = spawn(process.execPath, [nextBin, "start", "-H", "127.0.0.1", "-p", "3005"], {
    cwd: projectDir,
    stdio: "pipe"
  });

  server.stdout.on("data", (d) => process.stdout.write(d));
  server.stderr.on("data", (d) => process.stderr.write(d));

  let ready = false;
  for (let i = 0; i < 25; i++) {
    await new Promise((r) => setTimeout(r, 400));
    try {
      await new Promise((resolve, reject) => {
        const req = http.get("http://127.0.0.1:3005", (res) => {
          if (res.statusCode === 200) resolve();
          else reject(new Error(`Status ${res.statusCode}`));
        });
        req.on("error", reject);
      });
      ready = true;
      console.log("\nNext.js server is ready!");
      break;
    } catch (e) {
      // retry
    }
  }

  if (!ready) {
    console.error("Server timed out.");
    server.kill();
    process.exit(1);
  }

  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const viewports = [
    { name: "current-desktop-1440x900", width: 1440, height: 900 },
    { name: "current-widescreen-1920x1080", width: 1920, height: 1080 },
  ];

  for (const vp of viewports) {
    const outFile = path.join(outputDir, `${vp.name}.png`);
    const cmd = `"${chromePath}" --headless=new --disable-gpu --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${outFile}" "http://127.0.0.1:3005"`;
    console.log(`Capturing ${vp.name}...`);
    try {
      execSync(cmd, { stdio: "inherit" });
      console.log(`Saved ${outFile}`);
    } catch (e) {
      console.error(`Failed ${vp.name}:`, e.message);
    }
  }

  server.kill();
  console.log("Capture completed!");
}

capture();

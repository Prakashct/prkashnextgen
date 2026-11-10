const { spawn, execSync } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

async function test() {
  const projectDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio";
  const outputDir = path.join(projectDir, "screenshots");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("Starting Next.js server via node server...");
  const nextBin = path.join(projectDir, "node_modules", "next", "dist", "bin", "next");
  const server = spawn(process.execPath, [nextBin, "start", "-p", "3005"], {
    cwd: projectDir,
    stdio: "inherit"
  });

  // Poll until HTTP 200
  let ready = false;
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 500));
    try {
      await new Promise((resolve, reject) => {
        const req = http.get("http://localhost:3005", (res) => {
          if (res.statusCode === 200) {
            resolve();
          } else {
            reject(new Error(`Status ${res.statusCode}`));
          }
        });
        req.on("error", reject);
      });
      ready = true;
      console.log("Server is ready and responded with 200 OK!");
      break;
    } catch (e) {
      // wait
    }
  }

  if (!ready) {
    console.error("Server failed to respond within 10 seconds.");
    server.kill();
    process.exit(1);
  }

  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const viewports = [
    { name: "tall-portrait-800x1200", width: 800, height: 1200 },
    { name: "wide-landscape-1920x820", width: 1920, height: 820 },
    { name: "desktop-1440x900", width: 1440, height: 900 },
    { name: "mobile-390x844", width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    const outFile = path.join(outputDir, `${vp.name}.png`);
    const cmd = `"${chromePath}" --headless=new --disable-gpu --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${outFile}" "http://localhost:3005"`;
    console.log(`Capturing ${vp.name}...`);
    try {
      execSync(cmd, { stdio: "inherit" });
      console.log(`Saved ${outFile}`);
    } catch (e) {
      console.error(`Failed ${vp.name}:`, e.message);
    }
  }

  server.kill();
  console.log("All test viewports captured successfully!");
}

test();

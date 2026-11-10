const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

async function capture() {
  const projectDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio";
  const outputDir = path.join(projectDir, "screenshots");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("Starting Next.js server on port 3005...");
  const server = spawn("npx.cmd", ["next", "start", "-p", "3005"], {
    cwd: projectDir,
    stdio: "pipe"
  });

  server.stdout.on("data", (data) => console.log(`[Next] ${data.toString().trim()}`));
  server.stderr.on("data", (data) => console.error(`[Next err] ${data.toString().trim()}`));

  // Wait for server to start
  await new Promise((resolve) => setTimeout(resolve, 3500));

  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const viewports = [
    { name: "desktop-1440", width: 1440, height: 900 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "mobile-390", width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    const outFile = path.join(outputDir, `${vp.name}.png`);
    const cmd = `"${chromePath}" --headless=new --disable-gpu --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${outFile}" "http://localhost:3005"`;
    console.log(`Capturing ${vp.name}...`);
    try {
      execSync(cmd, { stdio: "inherit" });
      console.log(`Saved ${outFile}`);
    } catch (e) {
      console.error(`Failed capturing ${vp.name}:`, e.message);
    }
  }

  server.kill("SIGTERM");
  console.log("Done!");
}

capture();

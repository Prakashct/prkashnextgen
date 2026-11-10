const { spawn } = require('child_process');
const http = require('http');
const path = require('path');

const projectDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio";
const nextBin = path.join(projectDir, "node_modules", "next", "dist", "bin", "next");

console.log("Starting next dev on port 3010...");
const dev = spawn(process.execPath, [nextBin, "dev", "-p", "3010"], {
  cwd: projectDir,
  stdio: "pipe"
});

dev.stdout.on("data", (d) => process.stdout.write(`[dev] ${d}`));
dev.stderr.on("data", (d) => process.stderr.write(`[dev err] ${d}`));

setTimeout(async () => {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  console.log("Fetching page with chrome...");
  
  // Use powershell to run chrome and take screenshot or dump console
  const chromeProc = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--remote-debugging-port=9222",
    "http://localhost:3010"
  ]);

  await new Promise(r => setTimeout(r, 4000));
  
  // Fetch CDP console logs
  try {
    http.get("http://localhost:9222/json", (res) => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        console.log("CDP targets:", data);
        chromeProc.kill();
        dev.kill();
        process.exit(0);
      });
    });
  } catch (e) {
    chromeProc.kill();
    dev.kill();
    process.exit(1);
  }
}, 5000);

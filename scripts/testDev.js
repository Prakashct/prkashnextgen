const { spawn } = require('child_process');
const http = require('http');
const path = require('path');

const projectDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio";
const nextBin = path.join(projectDir, "node_modules", "next", "dist", "bin", "next");

console.log("Starting next dev...");
const dev = spawn(process.execPath, [nextBin, "dev", "-p", "3008"], {
  cwd: projectDir,
  stdio: "pipe"
});

dev.stdout.on("data", (d) => console.log(`[dev stdout] ${d.toString()}`));
dev.stderr.on("data", (d) => console.error(`[dev stderr] ${d.toString()}`));

setTimeout(async () => {
  console.log("Fetching http://localhost:3008/ ...");
  http.get("http://localhost:3008/", (res) => {
    let body = "";
    res.on("data", (chunk) => body += chunk);
    res.on("end", () => {
      console.log(`Status: ${res.statusCode}`);
      if (body.includes("Error") || body.includes("TypeError") || body.includes("__webpack_modules__")) {
        console.error("Found error in body:\n", body.slice(0, 1000));
      } else {
        console.log("Successfully fetched page without error! Body length:", body.length);
      }
      dev.kill();
      process.exit(0);
    });
  }).on("error", (e) => {
    console.error("Fetch failed:", e);
    dev.kill();
    process.exit(1);
  });
}, 4000);

const { spawn, execSync } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

async function testDev() {
  const projectDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio';
  const nextBin = path.join(projectDir, 'node_modules', 'next', 'dist', 'bin', 'next');
  const port = 3010;

  console.log('Starting next dev on port ' + port + '...');
  const dev = spawn(process.execPath, [nextBin, 'dev', '-p', String(port)], {
    cwd: projectDir,
    stdio: 'pipe'
  });

  dev.stdout.on('data', d => process.stdout.write(d.toString()));
  dev.stderr.on('data', d => process.stderr.write(d.toString()));

  let ready = false;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 600));
    try {
      await new Promise((res, rej) => {
        const req = http.get(`http://localhost:${port}/`, (r) => {
          if (r.statusCode === 200) res();
          else rej(new Error('Status ' + r.statusCode));
        });
        req.on('error', rej);
      });
      ready = true;
      console.log('\nNext dev server ready!');
      break;
    } catch (e) {}
  }

  if (!ready) {
    console.error('Server timed out');
    dev.kill();
    return;
  }

  const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const outDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\74c12f2b-8412-49bb-9963-5c450a8cdd68';

  try {
    const desktopFile = path.join(outDir, 'screenshot-desktop.png');
    execSync(`"${chrome}" --headless=new --disable-gpu --hide-scrollbars --window-size=1440,1800 --screenshot="${desktopFile}" http://localhost:${port}/`);
    console.log('Desktop captured: ' + desktopFile);

    const mobileFile = path.join(outDir, 'screenshot-mobile.png');
    execSync(`"${chrome}" --headless=new --disable-gpu --hide-scrollbars --window-size=390,1600 --screenshot="${mobileFile}" http://localhost:${port}/`);
    console.log('Mobile captured: ' + mobileFile);
  } catch (err) {
    console.error('Chrome capture error:', err.message);
  } finally {
    dev.kill();
    console.log('Dev server stopped.');
  }
}

testDev();

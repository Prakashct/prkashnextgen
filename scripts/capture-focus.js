const { spawn, execSync } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

async function testRender() {
  const projectDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio';
  const nextBin = path.join(projectDir, 'node_modules', 'next', 'dist', 'bin', 'next');
  const port = 3055;
  
  console.log('Spawning next start on port ' + port);
  const server = spawn(process.execPath, [nextBin, 'start', '-p', String(port)], {
    cwd: projectDir,
    stdio: 'inherit'
  });

  let ready = false;
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 600));
    try {
      await new Promise((res, rej) => {
        const req = http.get(`http://localhost:${port}`, (r) => {
          if (r.statusCode === 200) res();
          else rej(new Error('Status ' + r.statusCode));
        });
        req.on('error', rej);
      });
      ready = true;
      console.log('Server responded 200 OK');
      break;
    } catch (e) {
      // retry
    }
  }

  if (!ready) {
    console.error('Server timed out');
    server.kill();
    return;
  }

  const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const outDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\74c12f2b-8412-49bb-9963-5c450a8cdd68';

  try {
    const desktopOut = path.join(outDir, 'screenshot-desktop.png');
    execSync(`"${chrome}" --headless=new --disable-gpu --hide-scrollbars --window-size=1440,1400 --screenshot="${desktopOut}" http://localhost:${port}`);
    console.log('Desktop screenshot taken: ' + desktopOut);

    const mobileOut = path.join(outDir, 'screenshot-mobile.png');
    execSync(`"${chrome}" --headless=new --disable-gpu --hide-scrollbars --window-size=390,1200 --screenshot="${mobileOut}" http://localhost:${port}`);
    console.log('Mobile screenshot taken: ' + mobileOut);
  } catch (err) {
    console.error('Chrome capture error:', err.message);
  } finally {
    server.kill();
    console.log('Server stopped');
  }
}

testRender();

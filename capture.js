const puppeteer = require('puppeteer');
const http = require('http');
const handler = require('serve-handler');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function main() {
    const screenshotsDir = './screenshots';
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir);
    }

    // Define breakpoints
    const breakpoints = [
        { name: 'mobile', width: 375, height: 812 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'desktop', width: 1280, height: 800 },
    ];

    console.log('Starting preview server...');
    const child = spawn('npm', ['run', 'preview', '--', '--port', '5000'], { stdio: 'pipe' });

    // wait 3 seconds to let vite start
    await new Promise(r => setTimeout(r, 4000));

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    for (const bp of breakpoints) {
        console.log(`Setting viewport to ${bp.width}x${bp.height} and capturing...`);
        await page.setViewport({ width: bp.width, height: bp.height });
        await page.goto('http://localhost:5000', { waitUntil: 'networkidle0', timeout: 30000 });

        // allow images space to settle
        await new Promise(r => setTimeout(r, 1000));

        await page.screenshot({
            path: path.join(screenshotsDir, `screenshot-${bp.name}.png`),
            fullPage: true
        });
        console.log(`Captured ${bp.name}`);
    }

    await browser.close();
    console.log('Done!');

    // kill vite process
    child.kill();
    process.exit(0);
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});

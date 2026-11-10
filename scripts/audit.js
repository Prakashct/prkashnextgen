const fs = require('fs');
const path = require('path');

const htmlPath = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\.next\\server\\app\\index.html";
const html = fs.readFileSync(htmlPath, 'utf8');

console.log("=== SEO & SEMANTIC HTML AUDIT ===");

// 1. Primary H1
const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
console.log(`H1 count: ${h1Matches ? h1Matches.length : 0}`);
if (h1Matches) console.log(`H1 content: ${h1Matches[0]}`);

// 2. Title & Description
const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
console.log(`Title: ${titleMatch ? titleMatch[1] : 'NONE'}`);

const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
console.log(`Description: ${descMatch ? descMatch[1] : 'NONE'}`);

// 3. Canonical
const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
console.log(`Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`);

// 4. JSON-LD
const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
console.log(`JSON-LD scripts: ${jsonLdMatches ? jsonLdMatches.length : 0}`);

// 5. OpenGraph & Twitter
const ogImage = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/i);
console.log(`OG Image: ${ogImage ? ogImage[1] : 'NONE'}`);

// 6. Preload hero image
const imgPreload = html.match(/<link[^>]*rel="preload"[^>]*as="image"[^>]*>/gi);
console.log(`Image preload links: ${imgPreload ? imgPreload.length : 0}`);
if (imgPreload) console.log(`Preload tag: ${imgPreload[0]}`);

// 7. Semantic tags check
console.log(`Has <header>: ${html.includes('<header')}`);
console.log(`Has <main>: ${html.includes('<main')}`);
console.log(`Has <section>: ${html.includes('<section')}`);
console.log(`Has <nav>: ${html.includes('<nav')}`);

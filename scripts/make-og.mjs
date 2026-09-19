// Generates public/og-default.png (1200x630) from an SVG using sharp.
// Run once (and whenever branding changes): `node scripts/make-og.mjs`.
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const logoPath = fileURLToPath(new URL('../src/assets/logo.png', import.meta.url));
const logo = readFileSync(logoPath).toString('base64');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#050607"/>
      <stop offset="1" stop-color="#0a0f0c"/>
    </linearGradient>
    <radialGradient id="glow" cx="20%" cy="32%" r="58%">
      <stop offset="0" stop-color="#2f9c5a" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#2f9c5a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g font-family="'JetBrains Mono','Courier New',monospace">
    <text x="90" y="150" fill="#2f9c5a" font-size="26">// security researcher</text>
    <text x="86" y="270" fill="#dbe2df" font-size="94" font-weight="700">Faraz Ahmed</text>
    <text x="90" y="340" fill="#5c8f74" font-size="40">@PakCyberbot</text>
    <text x="90" y="470" fill="#8a938e" font-size="30">Red Teaming · Bug Bounty · OSINT · CTF</text>
    <text x="90" y="520" fill="#565f5a" font-size="26">OSCP · eJPTv2 · GCP Security Engineer</text>
  </g>
  <image href="data:image/png;base64,${logo}" x="905" y="150" width="215" height="284" preserveAspectRatio="xMidYMid meet" opacity="0.9"/>
  <rect x="0" y="622" width="1200" height="8" fill="#1c7a44"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(
  fileURLToPath(new URL('../public/og-default.png', import.meta.url))
);
console.log('Wrote public/og-default.png');

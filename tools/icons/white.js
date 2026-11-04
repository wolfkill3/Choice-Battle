// Flat white 32x32 BLP1 (paletted, no alpha) for frames tinted with SetFrameColourEx: custom HP bar colours, colour swatches.
// Usage: node white.js <out.blp>
const fs = require('fs');
const out = process.argv[2];
const sizes = [32, 16, 8, 4, 2, 1];
const head = Buffer.alloc(28 + 64 + 64 + 1024);
head.write('BLP1', 0); head.writeUInt32LE(1, 4); head.writeUInt32LE(0, 8);
head.writeUInt32LE(32, 12); head.writeUInt32LE(32, 16); head.writeUInt32LE(5, 20); head.writeUInt32LE(1, 24);
let off = head.length;
const mips = sizes.map(s => Buffer.alloc(s * s, 0));
mips.forEach((m, i) => { head.writeUInt32LE(off, 28 + i * 4); head.writeUInt32LE(m.length, 92 + i * 4); off += m.length; });
head[156] = 255; head[157] = 255; head[158] = 255; // palette entry 0 = white (BGRA)
fs.writeFileSync(out, Buffer.concat([head, ...mips]));

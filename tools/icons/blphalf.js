// BLP1 (JPEG or paletted) downscale without re-encoding: the next mip level becomes the main one.
//   node tools/icons/blphalf.js <file.blp> [levels=1] [minSide=64]
// Each level halves width and height (about 4x less data); the file is rewritten in place.
// Textures whose smaller side would drop below minSide are skipped. JPEG mips carry their own SOF
// (dimensions), the shared header is kept; paletted mips share the palette.
const fs = require('fs');
const [file, lv = '1', minS = '64'] = process.argv.slice(2);
const levels = +lv, minSide = +minS;
const b = fs.readFileSync(file);
if (b.toString('latin1', 0, 4) !== 'BLP1') throw new Error('not BLP1: ' + file);
const comp = b.readUInt32LE(4), w = b.readUInt32LE(12), h = b.readUInt32LE(16);
const ofs = [], sz = [];
for (let i = 0; i < 16; i++) { ofs.push(b.readUInt32LE(28 + i * 4)); sz.push(b.readUInt32LE(92 + i * 4)); }
const mips = ofs.map((o, i) => (sz[i] ? b.subarray(o, o + sz[i]) : null)).filter((m) => m);
const nw = w >> levels, nh = h >> levels;
if (Math.min(nw, nh) < minSide || mips.length <= levels) { console.log('skip', file, `${w}x${h}`); process.exit(0); }
const head = comp === 0 ? b.subarray(156, 160 + b.readUInt32LE(156)) : b.subarray(156, 156 + 1024); // JPEG header / palette
const keep = mips.slice(levels);
const out = Buffer.alloc(156);
b.copy(out, 0, 0, 28);
out.writeUInt32LE(nw, 12); out.writeUInt32LE(nh, 16);
let pos = 156 + head.length;
keep.forEach((m, i) => { out.writeUInt32LE(pos, 28 + i * 4); out.writeUInt32LE(m.length, 92 + i * 4); pos += m.length; });
const res = Buffer.concat([out, head, ...keep]);
fs.writeFileSync(file, res);
console.log(`${file}: ${w}x${h} -> ${nw}x${nh}, ${(b.length / 1024).toFixed(0)} -> ${(res.length / 1024).toFixed(0)} KB`);

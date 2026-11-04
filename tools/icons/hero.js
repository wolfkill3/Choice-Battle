// Hero icon and portrait texture from PNG pictures, BLP1 paletted (256 colours), full mipmap chain:
//   icon     <in.png 64x64> <BTN.blp> <DISBTN.blp> [preview dir]  — Button Manager borders as in gear.js
//                                                                     (bm_btn.tga Shading 100, bm_disbtn.tga Shading 120)
//   texture  <in.png> <out.blp>                                     — plain picture (portrait), side a power of two
// PNG: 8-bit RGB / RGBA, non-interlaced.
const fs = require('fs');
const zlib = require('zlib');
const BM = 'C:/Users/Maxim/Downloads/Button Manager/standard/';

function readPng(file) {
  const b = fs.readFileSync(file);
  let p = 8, w = 0, h = 0, ct = 0, depth = 0, il = 0; const idat = [];
  while (p < b.length) {
    const len = b.readUInt32BE(p), t = b.toString('latin1', p + 4, p + 8), d = b.subarray(p + 8, p + 8 + len);
    if (t === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); depth = d[8]; ct = d[9]; il = d[12]; }
    if (t === 'IDAT') idat.push(d);
    if (t === 'IEND') break;
    p += 12 + len;
  }
  if (depth !== 8 || (ct !== 2 && ct !== 6) || il) throw new Error(`png ${file}: depth ${depth} type ${ct} interlace ${il}`);
  const bpp = ct === 6 ? 4 : 3, raw = zlib.inflateSync(Buffer.concat(idat)), stride = w * bpp;
  const px = Buffer.alloc(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], src = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? px[y * stride + x - bpp] : 0, up = y ? px[(y - 1) * stride + x] : 0, c = y && x >= bpp ? px[(y - 1) * stride + x - bpp] : 0;
      let v = src[x];
      if (f === 1) v += a; else if (f === 2) v += up; else if (f === 3) v += (a + up) >> 1;
      else if (f === 4) { const pp = a + up - c, pa = Math.abs(pp - a), pb = Math.abs(pp - up), pc = Math.abs(pp - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? up : c; }
      px[y * stride + x] = v & 255;
    }
  }
  const rgb = new Float32Array(w * h * 3);
  for (let i = 0; i < w * h; i++) for (let k = 0; k < 3; k++) rgb[i * 3 + k] = px[i * bpp + k];
  return { w, h, rgb };
}
function readTga(file) {
  const b = fs.readFileSync(file);
  const idLen = b[0], type = b[2], w = b.readUInt16LE(12), h = b.readUInt16LE(14), bpp = b[16], desc = b[17];
  const px = bpp / 8; let p = 18 + idLen; const out = new Uint8Array(w * h * 4); let i = 0;
  const put = (o) => { out[i * 4] = b[o + 2]; out[i * 4 + 1] = b[o + 1]; out[i * 4 + 2] = b[o]; out[i * 4 + 3] = px === 4 ? b[o + 3] : 255; i++; };
  if (type === 2) { while (i < w * h) { put(p); p += px; } }
  else if (type === 10) {
    while (i < w * h) {
      const c = b[p++]; const n = (c & 127) + 1;
      if (c & 128) { for (let k = 0; k < n; k++) put(p); p += px; }
      else for (let k = 0; k < n; k++) { put(p); p += px; }
    }
  } else throw new Error('tga type ' + type);
  if (!(desc & 32)) { const row = w * 4; const t = new Uint8Array(out.length); for (let y = 0; y < h; y++) t.set(out.subarray(y * row, y * row + row), (h - 1 - y) * row); return { w, h, d: t }; }
  return { w, h, d: out };
}
function writeTga(file, w, h, d) {
  const hd = Buffer.alloc(18); hd[2] = 2; hd.writeUInt16LE(w, 12); hd.writeUInt16LE(h, 14); hd[16] = 32; hd[17] = 8 | 32;
  const px = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) { px[i * 4] = d[i * 4 + 2]; px[i * 4 + 1] = d[i * 4 + 1]; px[i * 4 + 2] = d[i * 4]; px[i * 4 + 3] = 255; }
  fs.writeFileSync(file, Buffer.concat([hd, px]));
}
// Button Manager border: border pixels with R=G=B shade the picture (255 = unchanged), the rest is the border itself
function bordered(src, W, borderFile, amp) {
  const bd = readTga(BM + borderFile);
  if (bd.w !== W || bd.h !== W) throw new Error('border size ' + borderFile);
  const out = new Uint8Array(W * W * 4);
  for (let i = 0; i < W * W; i++) {
    const r = bd.d[i * 4], g = bd.d[i * 4 + 1], b = bd.d[i * 4 + 2];
    if (r === g && g === b) {
      const f = Math.max(0, 1 - (1 - r / 255) * amp / 100);
      for (let c = 0; c < 3; c++) out[i * 4 + c] = Math.round(Math.max(0, Math.min(255, src[i * 3 + c] * f)));
    } else { out[i * 4] = r; out[i * 4 + 1] = g; out[i * 4 + 2] = b; }
    out[i * 4 + 3] = 255;
  }
  return out;
}
function medianCut(pix, n) {
  let boxes = [pix];
  while (boxes.length < n) {
    let bi = -1, best = -1, bc = 0;
    boxes.forEach((bx, i) => { if (bx.length < 2) return; for (let c = 0; c < 3; c++) { let lo = 255, hi = 0; for (const p of bx) { lo = Math.min(lo, p[c]); hi = Math.max(hi, p[c]); } if (hi - lo > best) { best = hi - lo; bi = i; bc = c; } } });
    if (bi < 0 || best === 0) break;
    const bx = boxes[bi].slice().sort((a, b) => a[bc] - b[bc]); const m = bx.length >> 1;
    boxes.splice(bi, 1, bx.slice(0, m), bx.slice(m));
  }
  return boxes.map(bx => [0, 1, 2].map(c => Math.round(bx.reduce((s, p) => s + p[c], 0) / bx.length)));
}
function writeBlp(file, rgba, W) {
  const pix = []; for (let i = 0; i < W * W; i++) pix.push([rgba[i * 4], rgba[i * 4 + 1], rgba[i * 4 + 2]]);
  const pal = medianCut(pix, 256); while (pal.length < 256) pal.push([0, 0, 0]);
  const cache = new Map();
  const near = (r, g, b) => {
    const key = (r << 16) | (g << 8) | b; if (cache.has(key)) return cache.get(key);
    let bi = 0, bd = 1e9; for (let k = 0; k < 256; k++) { const d = (pal[k][0] - r) ** 2 + (pal[k][1] - g) ** 2 + (pal[k][2] - b) ** 2; if (d < bd) { bd = d; bi = k; } }
    cache.set(key, bi); return bi;
  };
  const mips = []; let cur = rgba, w = W;
  for (;;) {
    const idx = Buffer.alloc(w * w); for (let i = 0; i < w * w; i++) idx[i] = near(cur[i * 4], cur[i * 4 + 1], cur[i * 4 + 2]);
    mips.push(idx);
    if (w === 1 || mips.length === 16) break;
    const nw = w >> 1, nx = new Uint8Array(nw * nw * 4);
    for (let y = 0; y < nw; y++) for (let x = 0; x < nw; x++) for (let c = 0; c < 4; c++)
      nx[(y * nw + x) * 4 + c] = (cur[((2 * y) * w + 2 * x) * 4 + c] + cur[((2 * y) * w + 2 * x + 1) * 4 + c] + cur[((2 * y + 1) * w + 2 * x) * 4 + c] + cur[((2 * y + 1) * w + 2 * x + 1) * 4 + c] + 2) >> 2;
    cur = nx; w = nw;
  }
  const head = Buffer.alloc(28 + 64 + 64 + 1024);
  head.write('BLP1', 0); head.writeUInt32LE(1, 4); head.writeUInt32LE(0, 8);   // paletted, no alpha
  head.writeUInt32LE(W, 12); head.writeUInt32LE(W, 16); head.writeUInt32LE(5, 20); head.writeUInt32LE(1, 24);
  let off = head.length;
  mips.forEach((m, i) => { head.writeUInt32LE(off, 28 + i * 4); head.writeUInt32LE(m.length, 92 + i * 4); off += m.length; });
  pal.forEach((p, i) => { head[156 + i * 4] = p[2]; head[157 + i * 4] = p[1]; head[158 + i * 4] = p[0]; head[159 + i * 4] = 0; });
  fs.writeFileSync(file, Buffer.concat([head, ...mips]));
  return mips.length;
}
const toRgba = (rgb, n) => { const o = new Uint8Array(n * 4); for (let i = 0; i < n; i++) { for (let c = 0; c < 3; c++) o[i * 4 + c] = Math.round(rgb[i * 3 + c]); o[i * 4 + 3] = 255; } return o; };

const [mode, ...a] = process.argv.slice(2);
if (mode === 'icon') {
  const [inp, outBtn, outDis, prev] = a;
  const { w, h, rgb } = readPng(inp);
  if (w !== 64 || h !== 64) throw new Error(`icon must be 64x64, got ${w}x${h}`);
  const grey = new Float32Array(w * h * 3);
  for (let i = 0; i < w * h; i++) { const l = (rgb[i * 3] * .3 + rgb[i * 3 + 1] * .59 + rgb[i * 3 + 2] * .11) * .7; grey[i * 3] = grey[i * 3 + 1] = grey[i * 3 + 2] = l; }
  const btn = bordered(rgb, 64, 'bm_btn.tga', 100), dis = bordered(grey, 64, 'bm_disbtn.tga', 120);
  console.log('BTN', outBtn, 'mips', writeBlp(outBtn, btn, 64));
  console.log('DISBTN', outDis, 'mips', writeBlp(outDis, dis, 64));
  if (prev) { writeTga(prev + '/btn.tga', 64, 64, btn); writeTga(prev + '/dis.tga', 64, 64, dis); }
} else if (mode === 'texture') {
  const [inp, out] = a;
  const { w, h, rgb } = readPng(inp);
  if (w !== h || (w & (w - 1))) throw new Error(`texture must be square power of two, got ${w}x${h}`);
  console.log('texture', out, 'mips', writeBlp(out, toRgba(rgb, w * h), w));
} else throw new Error('mode: icon | texture');

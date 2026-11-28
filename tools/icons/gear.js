// Gear icon for the map settings button, 64x64 BLP (BTN + DISBTN):
// gear drawn here, then the Button Manager borders (C:\Users\Maxim\Downloads\Button Manager\standard\bm_btn.tga /
// bm_disbtn.tga) applied the way Button Manager does it: border pixels with R=G=B shade the image
// (255 = unchanged, 0 = black, "Shading" amplifier from ButtonManager.ini), other pixels are drawn as the border.
// DISBTN: the image is greyed and darkened first, like the disabled icons of the game.
// Output: BLP1, paletted (256 colours), no alpha, full mipmap chain. Optional TGA previews.
// Usage: node gear.js <BTN.blp> <DISBTN.blp> [preview dir]
const fs = require('fs');
const BM = 'C:/Users/Maxim/Downloads/Button Manager/standard/';
const [OUT_BTN, OUT_DIS, PREV] = process.argv.slice(2);

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

// ---- gear, 4x4 supersampled, RGB floats ----
const W = 64, SS = 4;
const img = new Float32Array(W * W * 3);
const teeth = 8, rOut = 25, rIn = 19.5, rHole = 8.5, rHub = 12.5;
const inGear = (x, y) => {
  const dx = x - 32, dy = y - 32, r = Math.hypot(dx, dy); const a = Math.atan2(dy, dx) + Math.PI / teeth / 2;
  const t = ((a / (2 * Math.PI / teeth)) % 1 + 1) % 1;
  return r <= (Math.abs(t - 0.5) < 0.22 ? rOut : rIn) && r >= rHole;
};
for (let y = 0; y < W; y++) for (let x = 0; x < W; x++) {
  let cov = 0, shade = 0;
  for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
    const fx = x + (sx + .5) / SS, fy = y + (sy + .5) / SS;
    if (!inGear(fx, fy)) continue;
    cov++;
    const dx = fx - 32, dy = fy - 32, r = Math.hypot(dx, dy);
    let l = 0.62 - 0.35 * ((dx + dy) / (2 * rOut));
    if (r < rHub) l *= 0.78;
    if (r > rIn - 1.2 && r < rIn + 0.2) l *= 0.85;
    shade += Math.max(0.15, Math.min(1, l));
  }
  const o = (y * W + x) * 3, k = cov / (SS * SS), s = cov ? shade / cov : 0;
  const bg = [26 + y * 0.35, 34 + y * 0.35, 48 + y * 0.4];
  const metal = [205 * s + 30, 196 * s + 26, 170 * s + 18];
  for (let c = 0; c < 3; c++) img[o + c] = bg[c] * (1 - k) + metal[c] * k;
}

// ---- Button Manager border ----
function bordered(src, borderFile, amp) {
  const bd = readTga(BM + borderFile);
  if (bd.w !== 64 || bd.h !== 64) throw new Error('border size ' + borderFile);
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
const grey = new Float32Array(W * W * 3);
for (let i = 0; i < W * W; i++) { const l = (img[i * 3] * .3 + img[i * 3 + 1] * .59 + img[i * 3 + 2] * .11) * .7; grey[i * 3] = grey[i * 3 + 1] = grey[i * 3 + 2] = l; }
const btn = bordered(img, 'bm_btn.tga', 100);       // Shading=100 in ButtonManager.ini [BUTMAN_0]
const dis = bordered(grey, 'bm_disbtn.tga', 120);   // Shading=120 in [BUTMAN_5]

// ---- BLP1 writer: palette by median cut, nearest colour for every mipmap ----
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
function writeBlp(file, rgba) {
  const pix = []; for (let i = 0; i < W * W; i++) pix.push([rgba[i * 4], rgba[i * 4 + 1], rgba[i * 4 + 2]]);
  const pal = medianCut(pix, 256); while (pal.length < 256) pal.push([0, 0, 0]);
  const near = (r, g, b) => { let bi = 0, bd = 1e9; for (let k = 0; k < 256; k++) { const d = (pal[k][0] - r) ** 2 + (pal[k][1] - g) ** 2 + (pal[k][2] - b) ** 2; if (d < bd) { bd = d; bi = k; } } return bi; };
  const mips = []; let cur = rgba, w = W;
  for (;;) {
    const idx = Buffer.alloc(w * w); for (let i = 0; i < w * w; i++) idx[i] = near(cur[i * 4], cur[i * 4 + 1], cur[i * 4 + 2]);
    mips.push(idx);
    if (w === 1) break;
    const nw = w >> 1, nx = new Uint8Array(nw * nw * 4);
    for (let y = 0; y < nw; y++) for (let x = 0; x < nw; x++) for (let c = 0; c < 4; c++)
      nx[(y * nw + x) * 4 + c] = (cur[((2 * y) * w + 2 * x) * 4 + c] + cur[((2 * y) * w + 2 * x + 1) * 4 + c] + cur[((2 * y + 1) * w + 2 * x) * 4 + c] + cur[((2 * y + 1) * w + 2 * x + 1) * 4 + c] + 2) >> 2;
    cur = nx; w = nw;
  }
  const head = Buffer.alloc(28 + 64 + 64 + 1024);
  head.write('BLP1', 0); head.writeUInt32LE(1, 4); head.writeUInt32LE(0, 8);   // paletted, no alpha
  head.writeUInt32LE(W, 12); head.writeUInt32LE(W, 16); head.writeUInt32LE(5, 20); head.writeUInt32LE(1, 24); // picture type 5, mipmaps
  let off = head.length;
  mips.forEach((m, i) => { head.writeUInt32LE(off, 28 + i * 4); head.writeUInt32LE(m.length, 92 + i * 4); off += m.length; });
  pal.forEach((p, i) => { head[156 + i * 4] = p[2]; head[157 + i * 4] = p[1]; head[158 + i * 4] = p[0]; head[159 + i * 4] = 0; });
  fs.writeFileSync(file, Buffer.concat([head, ...mips]));
  return mips.length;
}
console.log('BTN', OUT_BTN, 'mips', writeBlp(OUT_BTN, btn));
console.log('DISBTN', OUT_DIS, 'mips', writeBlp(OUT_DIS, dis));
if (PREV) { writeTga(PREV + '/btn.tga', W, W, btn); writeTga(PREV + '/dis.tga', W, W, dis); }

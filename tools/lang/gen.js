// Prototype: one map for RU and EN. Usage: node gen.js <repo dir> <EN ref>
// - object texts (abilities, items, units, buffs, FrameDef from war3mapskin.txt): RU stays in table/*.ini,
//   EN goes into generated JASS chunks LANG_Data*, applied locally by GetLocale() or -en / -ru
// - code strings: lines that differ between RU and EN war3map.j only in string literals get L("ru","en")
const fs = require('fs');
const cp = require('child_process');
const R = process.argv[2].replace(/\\/g, '/').replace(/\/$/, '') + '/';
const REF = process.argv[3] || 'origin/English-TranslationFull';
const OUT = __dirname + '/';
const git = (args) => cp.execFileSync('git', args, { cwd: R, maxBuffer: 1 << 30, encoding: 'utf8' });
const enFile = (p) => git(['show', REF + ':' + p]);
const report = [];

// ---------- w2l ini parser (Lua-like values) ----------
function parseIni(t) {
  const res = new Map(); let sec = null; let i = 0; const n = t.length;
  const ws = () => { for (;;) { while (i < n && /\s/.test(t[i])) i++; if (t.startsWith('--', i)) { while (i < n && t[i] !== '\n') i++; } else break; } };
  function str() {
    const q = t[i++]; let s = '';
    while (i < n && t[i] !== q) {
      if (t[i] === '\\') { const c = t[i + 1]; i += 2; s += c === 'n' ? '\n' : c === 'r' ? '\r' : c === 't' ? '\t' : c; }
      else s += t[i++];
    }
    i++; return s;
  }
  function long() {
    const m = /^\[(=*)\[/.exec(t.slice(i, i + 20)); const close = ']' + m[1] + ']';
    i += m[0].length; if (t[i] === '\r') i++; if (t[i] === '\n') i++;
    const e = t.indexOf(close, i); const s = t.slice(i, e); i = e + close.length; return s;
  }
  function val() {
    ws();
    if (t[i] === '"' || t[i] === "'") return str();
    if (t[i] === '[' && /^\[=*\[/.test(t.slice(i, i + 20))) return long();
    if (t[i] === '{') {
      i++; const arr = [];
      for (;;) { ws(); if (t[i] === '}') { i++; break; } arr.push(val()); ws(); if (t[i] === ',') i++; }
      return arr;
    }
    const m = /^[^,}\s]+/.exec(t.slice(i, i + 200)); i += m[0].length; return m[0];
  }
  for (;;) {
    ws(); if (i >= n) break;
    if (t[i] === '[') { const e = t.indexOf(']', i); sec = new Map(); res.set(t.slice(i + 1, e), sec); i = e + 1; continue; }
    const m = /^[A-Za-z0-9_]+/.exec(t.slice(i, i + 100));
    if (!m) throw new Error('parse error at ' + i + ': ' + t.slice(i, i + 60));
    i += m[0].length; ws(); if (t[i] !== '=') throw new Error('no = at ' + i); i++;
    const v = val(); if (sec) sec.set(m[0], v);
  }
  return res;
}

// ---------- JASS string literal, split into pieces (longest literal in the map today is 374) ----------
function jstr(s) {
  s = s.replace(/\r/g, '').replace(/\n/g, '|n');
  const parts = []; let cur = ''; let bytes = 0;
  for (const ch of s) {
    const e = ch === '\\' ? '\\\\' : ch === '"' ? '\\"' : ch;
    const b = Buffer.byteLength(e);
    if (bytes + b > 300) { parts.push(cur); cur = ''; bytes = 0; }
    cur += e; bytes += b;
  }
  parts.push(cur);
  return parts.map(p => '"' + p + '"').join('+');
}

// ---------- object data ----------
const KINDS = [
  { file: 'ability', fn: 'LANG_A', fields: ['Tip', 'Ubertip', 'Researchtip', 'Researchubertip', 'Untip', 'Unubertip'], lv: true },
  { file: 'item', fn: 'LANG_It', fields: ['Name', 'Tip', 'Ubertip', 'Description'] },
  { file: 'unit', fn: 'LANG_U', fields: ['Name', null, 'Tip', 'Ubertip', 'Awakentip', 'Revivetip'] }, // Propernames — английские для всех, в unit.ini,
  { file: 'buff', fn: 'LANG_B', fields: ['Bufftip', 'Buffubertip'] }];
const calls = []; const stat = {};
const asList = (v) => v === undefined ? [] : Array.isArray(v) ? v : [v];
for (const k of KINDS) {
  const ru = parseIni(fs.readFileSync(R + 'table/' + k.file + '.ini', 'utf8'));
  const en = parseIni(enFile('table/' + k.file + '.ini'));
  let c = 0, onlyEn = 0, cyr = 0;
  for (const [id, es] of en) {
    const rs = ru.get(id); if (!rs) { onlyEn++; continue; }
    if (!/^[\x21-\x7e]{4}$/.test(id) || id.includes("'") || id.includes('\\')) continue;
    k.fields.forEach((f, fi) => {
      let ev = es.get(f), rv = rs.get(f);
      if (f === null) return;
      if (ev === undefined) return;
      if (!k.lv) {
        if (f === 'Propernames' && Array.isArray(ev)) { ev = ev.join(','); rv = asList(rv).join(','); }
        if (Array.isArray(ev)) ev = ev[0]; if (Array.isArray(rv)) rv = rv[0];
        if (typeof ev !== 'string' || ev === rv) return;
        if (/[Ѐ-ӿ]/.test(ev)) cyr++;
        calls.push('call ' + k.fn + "('" + id + "'," + fi + ',' + jstr(ev) + ')'); c++;
        return;
      }
      const el = asList(ev), rl = asList(rv);
      // Researchtip and the like are single strings: level 0
      el.forEach((s, lv) => {
        if (typeof s !== 'string' || s === rl[lv]) return;
        if (/[Ѐ-ӿ]/.test(s)) cyr++;
        calls.push('call ' + k.fn + "('" + id + "'," + fi + ',' + lv + ',' + jstr(s) + ')'); c++;
      });
    });
  }
  stat[k.file] = { entries: c, idsOnlyInEN: onlyEn, enWithCyrillic: cyr };
}
// FrameDef strings from war3mapskin.txt
{
  const sec = (t) => { const m = new Map(); let inF = false; for (const l of t.split(/\r?\n/)) { if (/^\[/.test(l)) { inF = l.trim() === '[FrameDef]'; continue; } const p = l.indexOf('='); if (inF && p > 0) m.set(l.slice(0, p), l.slice(p + 1)); } return m; };
  const ru = sec(fs.readFileSync(R + 'map/war3mapskin.txt', 'utf8')), en = sec(enFile('map/war3mapskin.txt'));
  let c = 0;
  for (const [key, v] of en) if (ru.has(key) && ru.get(key).trim() !== v.trim() && v.trim() !== '') { calls.push('call LANG_F(' + jstr(key) + ',' + jstr(v) + ')'); c++; }
  stat.framedef = { entries: c };
}
const CH = 250; const data = ['//LANG_DATA_BEGIN — сгенерировано tools/lang/gen.js из ' + REF + ', руками не править'];
let nch = 0;
for (let p = 0; p < calls.length; p += CH) {
  data.push('function LANG_Data' + nch + ' takes nothing returns nothing', ...calls.slice(p, p + CH), 'endfunction'); nch++;
}
data.push('function LANG_DataAll takes nothing returns nothing');
for (let c = 0; c < nch; c++) data.push('call ExecuteFunc("LANG_Data' + c + '")');
data.push('endfunction', '//LANG_DATA_END');

// ---------- core ----------
const core = fs.readFileSync(OUT + 'core.j', 'utf8').replace(/\r/g, '').trimEnd().split('\n');

// ---------- code strings: L("ru","en") ----------
const F = R + 'map/war3map.j';
const s0 = fs.readFileSync(F, 'utf8'); const nl = s0.includes('\r\n') ? '\r\n' : '\n';
let L = s0.split(/\r?\n/);
// drop an earlier generation
const cut = (b, e) => { const i = L.findIndex(l => l.startsWith(b)); if (i < 0) return; const j = L.findIndex((l, k) => k > i && l.startsWith(e)); L.splice(i, j - i + 1); };
cut('//LANG_DATA_BEGIN', '//LANG_DATA_END'); cut('//LANG_CORE_BEGIN', '//LANG_CORE_END');
L = L.filter(l => l !== 'call ExecuteFunc("LANG_Init") // язык (RU / EN) — до всего, что читает тексты');
L = L.filter(l => !/^(boolean LANG_EN=|hashtable LANG_HT=|integer LANG_N=|integer LANG_I=|group LANG_G=)/.test(l));
// diff по тексту без вставок генератора — номера строк совпадают с L и при повторном запуске
const os = require('os');
const tmpRu = os.tmpdir() + '/lang_ru.j', tmpEn = os.tmpdir() + '/lang_en.j';
fs.writeFileSync(tmpRu, L.join('\n')); fs.writeFileSync(tmpEn, enFile('map/war3map.j').replace(/\r/g, ''));
const diff = cp.spawnSync('git', ['diff', '--no-index', '-U0', '--no-color', tmpEn, tmpRu], { cwd: R, maxBuffer: 1 << 30, encoding: 'utf8' }).stdout
  .replace(/\r/g, '').split('\n');
// note: diff is "EN -> working tree", so '-' lines are EN, '+' lines are RU (current file)
const LIT = /"(?:[^"\\]|\\.)*"/g;
const endGlobals = L.indexOf('endglobals');
const conv = { pairs: 0, converted: 0, literals: 0 }; const skipped = [];
const edits = new Map();
for (let k = 0; k < diff.length; k++) {
  const h = /^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/.exec(diff[k]); if (!h) continue;
  const nm = h[2] === undefined ? 1 : +h[2], np = h[4] === undefined ? 1 : +h[4];
  const minus = diff.slice(k + 1, k + 1 + nm).map(x => x.slice(1)), plus = diff.slice(k + 1 + nm, k + 1 + nm + np).map(x => x.slice(1));
  // pair each RU line with the first unused EN line of the same skeleton (code without literals)
  const sk = (x) => x.replace(LIT, '""').replace(/\s+/g, ' ').trim();
  const used = new Set(); let from = 0;
  for (let q = 0; q < np; q++) {
    const lineNo = +h[3] + q - 1; const ruL = plus[q];
    let w = -1;
    for (let z = from; z < nm; z++) if (!used.has(z) && sk(minus[z]) === sk(ruL)) { w = z; break; }
    // уже переведённые строки (повторный запуск по готовому скрипту) и вставки генератора — не пропуски
    if (w < 0) { if (/"/.test(ruL) && !/^\s*\/\//.test(ruL) && !/Lng\(|LANG_|^call LANG_|^\/\/LANG_/.test(ruL)) skipped.push(['no EN pair', lineNo + 1, ruL]); continue; }
    used.add(w); from = w + 1;
    const enL = minus[w]; conv.pairs++;
    const rl = ruL.match(LIT) || [], el = enL.match(LIT) || [];
    if (rl.length !== el.length) { skipped.push(['code differs', lineNo + 1, ruL]); continue; }
    if (ruL === enL) continue;
    if (/^\s*\/\//.test(ruL)) continue; // commented line: keep RU
    if (lineNo < endGlobals) { skipped.push(['in globals', lineNo + 1, ruL]); continue; }
    let bad = null, idx = 0;
    const out = ruL.replace(LIT, (m, off) => {
      const e = el[idx++]; if (m === e) return m;
      if (/\\\\|\.(mdx?|blp|mp3|wav|tga)\b/i.test(m + e)) bad = 'path literal';
      const before = ruL.slice(0, off).trimEnd(), after = ruL.slice(off + m.length).trimStart();
      if (/(==|!=)$/.test(before) || /^(==|!=)/.test(after)) bad = 'string comparison';
      if (/(StringHash|S2I|S2R|ExecuteFunc|Save\w*|Load\w*)\(\s*$/.test(before)) bad = 'logic use';
      conv.literals++;
      return 'Lng(' + m + ',' + e + ')';
    });
    if (bad) { skipped.push([bad, lineNo + 1, ruL]); continue; }
    if (L[lineNo] !== ruL) { skipped.push(['line moved', lineNo + 1, ruL]); continue; }
    edits.set(lineNo, out); conv.converted++;
  }
}
for (const [ln, s] of edits) L[ln] = s;
// заголовки таймеров и квесты: через LANG_TdTitle / LANG_QuestBJ, чтобы обновлялись при смене языка
{
  const Q = '("(?:[^"\\\\]|\\\\.)*")';
  const td = new RegExp('^(\\s*)call TimerDialogSetTitle\\(\\s*(.*?)\\s*,\\s*Lng\\(' + Q + ',' + Q + '\\)\\s*\\)\\s*$');
  const qb = new RegExp('^(\\s*)call CreateQuestBJ\\(\\s*([\\w.]+)\\s*,\\s*' + Q + '\\s*,\\s*Lng\\(' + Q + ',' + Q + '\\)\\s*,(.*)\\)\\s*$');
  let nt = 0, nq = 0;
  L = L.map(l => {
    let m = td.exec(l); if (m) { nt++; return m[1] + 'call LANG_TdTitle(' + m[2] + ',' + m[3] + ',' + m[4] + ')'; }
    m = qb.exec(l); if (m) { nq++; return m[1] + 'call LANG_QuestBJ(' + m[2] + ',' + m[3] + ',' + m[4] + ',' + m[5] + ',' + m[6] + ')'; }
    return l;
  });
  conv.timerTitles = nt; conv.quests = nq;
}
// globals into the existing block, core after the last native, data before InitCustomTriggers, init call first in InitCustomTriggers
const GL = ['boolean LANG_EN=false // язык интерфейса у локального игрока (LANG_Init, -en / -ru)', 'hashtable LANG_HT=InitHashtable()', 'integer LANG_N=0', 'integer LANG_I=0', 'group LANG_G=CreateGroup()'];
L = L.filter(l => !GL.includes(l));
L.splice(L.indexOf('endglobals'), 0, ...GL);
let lastNative = -1; L.forEach((l, i) => { if (/^native /.test(l)) lastNative = i; });
L.splice(lastNative + 1, 0, ...core);
const ict = L.indexOf('function InitCustomTriggers takes nothing returns nothing');
L.splice(ict, 0, ...data);
const ict2 = L.indexOf('function InitCustomTriggers takes nothing returns nothing');
L.splice(ict2 + 1, 0, 'call ExecuteFunc("LANG_Init") // язык (RU / EN) — до всего, что читает тексты');
fs.writeFileSync(F, L.join(nl));

// ---------- desync audit: code that reads object texts ----------
const audit = [];
L.forEach((l, i) => {
  if (/^\s*\/\//.test(l)) return;
  if (/GetUnitName|GetHeroProperName|GetObjectName|GetItemName|GetAbilityName|StringField(ById)?\(|GetFDFDataString|BlzGetAbility\w*Tooltip/.test(l) &&
      /(==|!=)|StringHash|StringFind|SubString|StringLength|Save\w*\(|Set\w*Field/.test(l) && !/Set\w*StringField\(\s*\w+\s*,\s*(ITEM|UNIT|ABILITY|BUFF)_S\w*ICON/.test(l)) audit.push((i + 1) + ': ' + l.trim().slice(0, 220));
});
const rep = ['# LANG prototype report', '', 'EN ref: ' + REF, '', '## Object texts', JSON.stringify(stat, null, 1), 'calls: ' + calls.length + ', chunks: ' + nch, '',
  '## Code strings', JSON.stringify(conv), 'skipped: ' + skipped.length, ...skipped.map(s => '- [' + s[0] + '] ' + s[1] + ': ' + String(s[2]).trim().slice(0, 200)), '',
  '## Code reading object texts (check for desync / caching)', ...audit.map(a => '- ' + a)];
fs.writeFileSync(OUT + 'report.md', rep.join('\n'));
console.log(JSON.stringify(stat), 'calls', calls.length, 'chunks', nch, JSON.stringify(conv), 'skipped', skipped.length, 'audit', audit.length);

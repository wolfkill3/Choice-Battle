// One-time move of the English texts into the repo: LANG_* data now in map/war3map.j -> table/en/*.ini (+ table/en/war3mapskin.txt).
// After this, table/en is the English source for gen.js; the English-TranslationFull branch is no longer needed for texts.
// Usage: node tools/lang/extract.js <repo dir>
const fs = require('fs');
const R = (process.argv[2] || '.').replace(/\\/g, '/').replace(/\/$/, '') + '/';
const src = fs.readFileSync(__dirname + '/gen.js', 'utf8');
const parseIni = eval('(' + src.slice(src.indexOf('function parseIni'), src.indexOf('// ---------- JASS string literal')).trim() + ')');
const KINDS = {
  LANG_A: { file: 'ability', fields: ['Tip', 'Ubertip', 'Researchtip', 'Researchubertip', 'Untip', 'Unubertip'], lv: true },
  LANG_It: { file: 'item', fields: ['Name', 'Tip', 'Ubertip', 'Description'] },
  LANG_U: { file: 'unit', fields: ['Name', null, 'Tip', 'Ubertip', 'Awakentip', 'Revivetip'] },
  LANG_B: { file: 'buff', fields: ['Bufftip', 'Buffubertip'] }};
// JASS: "a"+"b" -> one string; \\ \" unescaped; |n back to real line breaks (gen.js writes them as |n again)
const lit = (s) => { let out = ''; for (const m of s.matchAll(/"((?:[^"\\]|\\.)*)"/g)) out += m[1].replace(/\\(.)/g, '$1'); return out.replace(/\|n/g, '\n'); };
const J = fs.readFileSync(R + 'map/war3map.j', 'utf8').replace(/\r/g, '');
const a = J.indexOf('//LANG_DATA_BEGIN'), b = J.indexOf('//LANG_DATA_END');
const data = J.slice(a, b).split('\n');
const got = {}; const frame = []; let n = 0;
for (const l of data) {
  let m = l.match(/^call (LANG_A)\('(.{4})',(\d+),(\d+),(.*)\)$/);
  if (m) { (got.LANG_A = got.LANG_A || new Map()); const id = m[2]; if (!got.LANG_A.has(id)) got.LANG_A.set(id, {}); const e = got.LANG_A.get(id); const f = KINDS.LANG_A.fields[+m[3]]; (e[f] = e[f] || [])[+m[4]] = lit(m[5]); n++; continue; }
  m = l.match(/^call (LANG_It|LANG_U|LANG_B)\('(.{4})',(\d+),(.*)\)$/);
  if (m) { (got[m[1]] = got[m[1]] || new Map()); if (!got[m[1]].has(m[2])) got[m[1]].set(m[2], {}); got[m[1]].get(m[2])[KINDS[m[1]].fields[+m[3]]] = lit(m[4]); n++; continue; }
  m = l.match(/^call LANG_F\(("(?:[^"\\]|\\.)*")\s*,(.*)\)$/);
  if (m) { frame.push([lit(m[1]), lit(m[2])]); n++; continue; }
}
const q = (s) => {
  if (!/[\n"\\]/.test(s)) return '"' + s + '"';
  // закрывающая скобка не должна встретиться раньше конца — в том числе из-за «]» в конце самого текста
  let eq = ''; while ((s + ']' + eq + ']').indexOf(']' + eq + ']') < s.length) eq += '=';
  // a line break right after [[ is dropped by the parser: keep a leading one
  return '[' + eq + '[' + (s.startsWith('\n') ? '\n' : '') + s + ']' + eq + ']';
};
fs.mkdirSync(R + 'table/en', { recursive: true });
const stat = {};
for (const [fn, k] of Object.entries(KINDS)) {
  const ru = parseIni(fs.readFileSync(R + 'table/' + k.file + '.ini', 'utf8'));
  const out = ['-- English texts for table/' + k.file + '.ini (only fields that differ from Russian). Source for tools/lang/gen.js.', ''];
  let c = 0;
  for (const [id, e] of (got[fn] || new Map())) {
    out.push('[' + id + ']');
    for (const f of k.fields) {
      if (!f || e[f] === undefined) continue;
      const rv = ru.get(id) ? ru.get(id).get(f) : undefined;
      if (k.lv && Array.isArray(rv)) {
        // a level equal to Russian was not in the data: take the Russian text (it is the same)
        const arr = rv.map((x, i) => e[f][i] !== undefined ? e[f][i] : x);
        for (let i = rv.length; i < e[f].length; i++) arr[i] = e[f][i] === undefined ? '' : e[f][i];
        out.push(f + ' = {', ...arr.map(x => q(x) + ','), '}');
      } else out.push(f + ' = ' + q(k.lv ? e[f][0] : e[f]));
      c++;
    }
    out.push('');
  }
  fs.writeFileSync(R + 'table/en/' + k.file + '.ini', out.join('\n'));
  stat[k.file] = c;
}
fs.writeFileSync(R + 'table/en/war3mapskin.txt', ['[FrameDef]', ...frame.map(([key, v]) => key + '=' + v.replace(/\n/g, '|n'))].join('\n') + '\n');
stat.framedef = frame.length;
console.log('calls read', n, JSON.stringify(stat));

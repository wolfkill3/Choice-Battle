// Tavern role filter data: roles from "Role:" / "Роль:" in hero Ubertip (table/unit.ini) -> bit masks in war3map.j
// between //TAVROLE_DATA_BEGIN and //TAVROLE_DATA_END (function TavRole_Data). Run after changing hero roles:
//   node tools/roles/gen.js            (from the repo root; rewrites the block, idempotent)
const fs = require('fs');
const path = require('path');
const R = path.join(__dirname, '..', '..') + '/';
// bit order = row order of the checkboxes in the tavern (TavRole_Build)
const ROLES = ['Caster', 'Carry', 'Assassin', 'Durable', 'Disabler', 'Exhauster', 'Support', 'Swordsman', 'Escape', 'Tank', 'Nuker', 'Initiator'];
const ALIAS = { 'Semi-Support': 'Support' };
const L = fs.readFileSync(R + 'table/unit.ini', 'utf8').replace(/\r/g, '').split('\n');
const mask = {}; let sec = '';
for (const l of L) {
  const m = l.match(/^\[(.+)\]$/); if (m) { sec = m[1]; continue; }
  const r = l.match(/(?:Role|Роль)\s*:\s*(.*)$/); if (!r) continue;
  let s = r[1].split('|n')[0].replace(/"/g, '').replace(/\|[cC][0-9a-fA-F]{8}|\|r/g, '');
  for (let w of s.split(/[,;]/)) {
    w = w.trim().replace(/\.$/, ''); w = ALIAS[w] || w;
    let b = ROLES.indexOf(w);
    if (w === 'All Classes') { mask[sec] = (1 << ROLES.length) - 1; continue; }
    if (b >= 0) mask[sec] = (mask[sec] || 0) | (1 << b);
  }
}
const J = R + 'map/war3map.j';
const j0 = fs.readFileSync(J, 'utf8'); const nl = j0.includes('\r\n') ? '\r\n' : '\n';
let s = j0.replace(/\r\n/g, '\n');
const heroes = [...new Set([...s.matchAll(/set udg_RH\[\d+\]='(\w{4})'/g)].map(m => m[1]))];
const miss = heroes.filter(h => !mask[h]);
const body = ['//TAVROLE_DATA_BEGIN — генерирует tools/roles/gen.js из Role:/Роль: в описании героя (table/unit.ini), руками не править',
  'function TavRole_Data takes nothing returns nothing',
  ...heroes.filter(h => mask[h]).map(h => "call TavRole_Set('" + h + "'," + mask[h] + ')'),
  'endfunction', '//TAVROLE_DATA_END'].join('\n');
const a = s.indexOf('//TAVROLE_DATA_BEGIN'), b = s.indexOf('//TAVROLE_DATA_END');
if (a < 0 || b < 0) throw new Error('markers not found');
s = s.slice(0, a) + body + s.slice(b + '//TAVROLE_DATA_END'.length);
fs.writeFileSync(J, s.split('\n').join(nl));
console.log('heroes', heroes.length, 'with roles', heroes.length - miss.length, miss.length ? 'no roles: ' + miss.join(' ') : '');

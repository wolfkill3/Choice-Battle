// Lines with different structure in RU and EN: whole message through Lng(). Run after gen.js.
const fs = require('fs');
const F = process.argv[2].replace(/\\/g, '/').replace(/\/$/, '') + '/map/war3map.j';
const s0 = fs.readFileSync(F, 'utf8'); const nl = s0.includes('\r\n') ? '\r\n' : '\n'; const L = s0.split(/\r?\n/);
const R = [
  ['call DisplayChatMessageEx(null,CHAT_RECIPIENT_UNKNOWN,10,true,GetUnitName(u)+" был забанен "+GetPlayerName(GetOwningPlayer(u))+"!")',
   'call DisplayChatMessageEx(null,CHAT_RECIPIENT_UNKNOWN,10,true,Lng(GetUnitName(u)+" был забанен "+GetPlayerName(GetOwningPlayer(u))+"!",GetPlayerName(GetOwningPlayer(u))+" has banned "+GetUnitName(u)+"!"))'],
  ['call DisplayChatMessageEx(null,CHAT_RECIPIENT_UNKNOWN,10,true,"Вторая команда заблокировала "+GetUnitName(u)+" осталось еще "+I2S(cmi2)+" бана(ов)!")',
   'call DisplayChatMessageEx(null,CHAT_RECIPIENT_UNKNOWN,10,true,Lng("Вторая команда заблокировала "+GetUnitName(u)+" осталось еще "+I2S(cmi2)+" бана(ов)!","The second team have blocked "+GetUnitName(u)+". There is still "+I2S(cmi2)+" bans left!"))'],
  ['call DisplayTextToPlayer(GetOwningPlayer(u),0,0,"Осталось "+I2S(re-1)+"зарядов.")',
   'call DisplayTextToPlayer(GetOwningPlayer(u),0,0,Lng("Осталось "+I2S(re-1)+"зарядов.",I2S(re-1)+" charges left."))']];
let c = 0;
for (let i = 0; i < L.length; i++) for (const [a, b] of R) if (L[i].trim() === a) { L[i] = L[i].replace(a, b); c++; }
fs.writeFileSync(F, L.join(nl));
console.log('manual', c);

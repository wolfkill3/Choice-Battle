// The LNI format allows both {"a", "b"} and {1 = "a", 2 = "b"} arrays.
function values(source) {
  const array = source.trim().startsWith('{');
  const body = array ? source.trim().slice(1, -1) : source.trim();
  const result = [];
  let next = 0;
  for (const entry of body.split(',')) {
    const match = entry.trim().match(/^(?:(\d+)\s*=\s*)?("[^"]*"|[^\r\n]+)$/);
    if (!match) continue;
    if (match[1]) next = Number(match[1]) - 1;
    result[next++] = match[2].trim().replace(/^"|"$/g, '');
  }
  return result;
}

function abilityFields(text) {
  const result = {};
  for (const block of text.replace(/^\uFEFF/, '').split(/\r?\n(?=\[[A-Za-z0-9]{4}\])/)) {
    const id = block.match(/^\[([A-Za-z0-9]{4})\]/)?.[1];
    if (!id) continue;
    const fields = result[id] = {};
    for (const match of block.matchAll(/^(_parent|DataF|DataB) = (\{[\s\S]*?\}|[^\r\n]*)/gm)) {
      fields[match[1]] = values(match[2]);
    }
  }
  return result;
}

module.exports = { values, abilityFields };

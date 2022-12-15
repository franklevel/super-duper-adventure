export function compress(str) {
  if (!str) return null;
  const re = /(.)\1+/gm;
  const matched = str.toString().match(re);
  if (!matched) return str;
  matched.forEach(function (value) {
    str = str.toString().replace(value, `${value[0]}x${value.length}`);
  });
  return str;
}

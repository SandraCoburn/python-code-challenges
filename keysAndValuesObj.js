function keysAndValues(obj) {
  console.log([Object.keys(obj), Object.values(obj)]);
  return [Object.keys(obj), Object.values(obj)];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
keysAndValues({ a: 'Apple', b: 'Microsoft', c: 'Google' });
keysAndValues({ key1: 'cat', key2: 'dog', key3: null });

function removeVowels(str) {
  let regex = /[aeios]/gi;
  return str.replace(regex, '');
}
console.log('remove vowels', removeVowels('ben'));

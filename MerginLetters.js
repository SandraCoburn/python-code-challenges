const merginLetters = (s, l) => {
  let mergedStr = '';
  let firstChars = s.split('');
  let secondChars = l.split('');
  //initilize pointer in first array
  for (
    let first = 0;
    first < firstChars.length || first < secondChars.length;
    first++
  ) {
    if (first < firstChars.length) mergedStr += firstChars[first];
    if (first < secondChars.length) mergedStr = mergedStr + secondChars[first];
    console.log('first s', s[first]);
  }
  //initialize pointer in second array
  // for (let second = 0; second < l.length; second++) {
  //   console.log('second l', l[second]);
  //   merged.push(l[second]);
  // }

  return mergedStr;
};
console.log(merginLetters('aaaaaa', 'b'));

function MerginLetters2(s, l) {
  let idx,
    strLength = Math.min(s.length, l.length),
    combined = '';

  //iterate and combine
  for (i = 0; i < strLength; i++) {
    combined = combined + s[i] + l[i];
  }
  return combined + s.slice(i) + l.slice(i);
}
console.log(MerginLetters2('abcd', 'jjjjjjj'));

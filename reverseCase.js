function reverseCase(str) {
  let sampleStr = '';
  for (let chr of str) {
    if (chr === chr.toLowerCase()) {
      let uppCase = chr.toUpperCase();
      sampleStr += uppCase;
    } else if (chr === chr.toUpperCase()) {
      let uppCase = chr.toLowerCase();
      sampleStr += uppCase;
    } else {
      sampleStr += chr;
    }
  }
  return sampleStr;
}

const string = 'HELLO world!';
console.log(reverseCase(string));

const buildString = (string1) => {
  arr1 = [];

  string1 = string1.split('');

  for (let s in string1) {
    string1[s] !== '#' ? arr1.push(string1[s]) : arr1.pop();
  }
  return arr1;
};
const BackSpaceCompare = (string1, string2) => {
  const buildS = buildString(string1);
  const buildT = buildString(string2);

  if (buildS.length !== buildT.length) {
    return false;
  } else {
    for (let f in string1) {
      if (buildS[f] !== buildT[f]) {
        return false;
      }
    }
  }
  return true;
};

let string1 = 'ab#z';
let string2 = 'az#z';
console.log(BackSpaceCompare(string1, string2));

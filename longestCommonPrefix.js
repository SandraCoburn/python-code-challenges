function longestCommonPrefix(strs) {
  console.log(strs);
  // only continue if input is non-empty array
  if (!strs) return '';

  //sort shortes length to longes
  const sortedArr = strs.sort((a, b) => a.length - b.length);
  console.log(sortedArr);

  // take shortest string
  let shortestString = sortedArr[0];
  console.log(shortestString);

  // Starting with entire shortes string, check if each string matches
  // if not, remove ending letter, and check again
  while (!strs.every((string) => string.startsWith(shortestString))) {
    if (shortestString.length === 0) return;
    shortestString = shortestString.slice(0, -1);
    console.log('shor', shortestString);
  }
  console.log('shortestring', shortestString);
  return shortestString;
}

console.log(
  longestCommonPrefix([
    'monocle',
    'monologue',
    ' monogamy',
    'monotony',
    'monorail',
  ])
);

//Better solution

function longestCommonPrefix2(strs) {
  //return early on empty input
  if (!strs.length) return;

  //loop through the letters of the first string
  for (let i = 0; i <= strs[0].length; i++) {
    //loop through the other strings
    for (let j = 1; j < strs.length; j++) {
      // check if this character is also presnet in the same position of each string
      if (strs[0][i] !== strs[j][i]) {
        //if not, return the string up to and including the prev char
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}
const arr = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix2(arr));

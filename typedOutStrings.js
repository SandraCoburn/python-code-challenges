/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
 * Note that after backspacing an empty text, the text will continue empty.
 * example1:
 * Input: S = "ab#c", T = "ad#c"
 * Output: true
 * Explanation: Both S and T become "ac"
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  //Best case test case: s: "ab#z" T: "az#z" True
  // First type them without the space then compare them
  // push and pop to an array and then compare the lenght first if it's not the same return false
  // If same length check to see if they're the same letters
  // two functions to make code dry
  // First function check for # let's call it buildString()

  const finalS = buildString(S);
  const finalT = buildString(T);
  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalT.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }
  return true;
};

const buildString = function (string) {
  const builtArray = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== '#') {
      builtArray.push(string[p]);
    } else {
      builtArray.pop();
    }
  }
  return builtArray;
};

console.log(backspaceCompare('ab#c', 'ad#c'));

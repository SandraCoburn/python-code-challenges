var backspaceCompare = function (S, T) {
  //optimize time complexity from typedOutStrings
  // Compare without building two arrays
  // Use two point structure
  // one pointer pointing to string S and other one to string T
  // initialize pointers at the end of string
  // add a counter to keep track of #'s found in string
  // if there is a hash we increment our counter if it's not a hash we decrement our counter
  // check for false cases first
  let backCount = 0;
  let p1 = S.length - 1,
    p2 = T.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === '#' || T[p2] === '#') {
      if (S[p1] === '#') {
        backCount = 2;
        while (backspaceCompare > 0) {
          p1--;
          backCount--;
          if (S[p1] === '#') {
            backCount = backCount + 2;
          }
        }
      }
      if (T[p2] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (T[p2] === '#') {
            backCount = backCount + 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
};

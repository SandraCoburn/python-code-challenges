function palindrome(str) {
  //Lowercase the string and use the RegExp to remove unwanted characters
  let re = /[\W_]/g;

  let lowRegStr = str.toLowerCase().replace(re, '');
  //Use the same chaining methods with build-in functions
  let reverseStr = lowRegStr.split('').reverse().join('');

  // Check if reverseStr is strictly equals to lowRegStr and return a boolean
  return reverseStr === lowRegStr;
}

/**
 * Find if a number is a palindrome
 */

function isPalindrome(num) {
  //edge cases: negative numbers, number is zero
  if (num === 0) return false;
  //convert to a string and then compare to reversed string
  let numToStr = num.toString().split('');
  console.log('num to str', numToStr);
  return numToStr === numToStr.reverse();
}

console.log(isPalindrome(88888));

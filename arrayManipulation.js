/**
 * Write a function that takes an array of characters and reverses the letters in place. ↴
 */

//O(n)
const str = 'my string';
function stringToArray(str) {
  return str.trim().split('').reverse().join('');
}

console.log('stringToArray', stringToArray(str));

function stringToArray2(str) {
  console.log([...str]);
  return Array.from(str);
}
console.log('stringToArray2', stringToArray2(str));

function reverse(str) {
  //check first and last index
  let leftIndex = 0;
  let rightIndex = str.length - 1;
  console.log('right Index', rightIndex);
  while (leftIndex < rightIndex) {
    //swap characters
    const temp = str[leftIndex];
    str[leftIndex] = str[rightIndex];
    str[rightIndex] = temp;
    //move towards the middle
    leftIndex++;
    rightIndex++;
  }
}

console.log('reverse', reverse(str));

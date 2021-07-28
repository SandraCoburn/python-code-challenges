// First Challenge: Add a border around entire array.
// const array = ['abc', 'ded']

// Results:

// ["*****", "*abc*", "*ded*", "*****"]

function addBorder(arr) {
  const wall = '*'.repeat(array[0].length + 2);
  arr.unshift(wall);
  arr.push(wall);
  for (let i = 1; i < arr.length - 1; i++) {
    arr[i] = '*'.concat(arr[i], '*');
    console.log(arr[i]);
  }
  return arr;
}
const array = ['abc', 'ded'];
console.log(addBorder(array));

// You are given a two-digit integer n. Return the sum of its digits
// Example

// For n = 29, the output should be addTwoDigits(n) = 11

function addTwoDigits(num) {
  let digits = num.toString().split('');
  console.log(digits);
  let total = digits.reduce((acc, num) => Number(acc) + Number(num), 0);
  return total;
}
const number1 = 87;
console.log(addTwoDigits(number1));

// Substract the numbers in the array, starting from the beginning
function substractNums(arr) {
  const total = arr.reduce((acc, num) => acc - num);
  return total;
}
const array = [175, 50, 25];
console.log(substractNums(array));

// sum of values in an object array
let initialValue = 0;
let array3 = [{ x: 1 }, { x: 2 }, { x: 3 }];
let sum = array3.reduce((acc, num) => acc + num.x, initialValue);
console.log('sum', sum); //sum 6

// Flatten an array of arrays
let arrayFlatten = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let flattened = arrayFlatten.reduce((acc, curr) => acc.concat(curr), []);
console.log('flattened ', flattened); //flattened  [ 0, 1, 2, 3, 4, 5 ]

// Counting instances of values in an objecct
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce((acc, curr) => {
  if (curr in acc) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log('counted Names: ', countedNames); //counted Names:  { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// Grouping objects by a property
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
let groupedPeople = groupBy(people, 'age');
console.log('grouped ', groupedPeople); //grouped  { 20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],'21': [ { name: 'Alice', age: 21 } ]}

//Bonding arrays contained in an array of objects using the spread operator and initialValue
// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
  },
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
  },
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allBooks = friends.reduce(
  (acc, currVal) => {
    console.log('acc', acc);
    return [...acc, ...currVal.books];
  },
  ['Alphabet']
);

console.log('All books', allBooks); //All books ['Alphabet','Bible','Harry Potter','War and peace','Romeo and Juliet','The Lord of the Rings','The Shining']

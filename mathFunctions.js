function sevenBoom(arr) {
  const singleNum = arr.join('');

  if (/7/.test(singleNum)) {
    return 'Boom';
  } else {
    return 'There is no 7 in the array';
  }
}
console.log('seven in', sevenBoom([2, 6, 7, 9, 3]));

console.log('no seven', sevenBoom([86, 48, 100, 66]));
console.log('seven in', sevenBoom([76, 55, 44, 32]));
console.log('seven in', sevenBoom([35, 4, 9, 37]));

function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}
console.log(towerHanoi(3));
console.log(towerHanoi(8));

function sumOfCubes(nums) {
  const newNums = nums.map((num) => num ** 3);
  let sum = newNums.reduce((total, num) => total + num, 0);
  return sum;
}
console.log('sum total', sumOfCubes([1, 5, 9]));

function sumOfCubes2(arr) {
  // const arrCubed = arr.map(num => num ** 3)
  const arrCubed = arr.map((num) => Math.pow(num, 3));
  let sum = arrCubed.reduce((total, num) => total + num, 0);
  return sum;
}
console.log('sum of cubes 2', sumOfCubes([1, 5, 9]));

function concat(...args) {
  let array = [...args];
  return array.flat();
}
console.log('concat', concat([1, 2, 3], [4, 5], [6, 7]));

function filterArray(arr) {
  let arr2 = [];
  arr.forEach((ele) => {
    if (typeof ele === 'number') {
      arr2.push(ele);
    } else {
      console.log(typeof ele);
    }
  });
  return arr2;
}
console.log('filtered numbers', filterArray([1, 2, 'aasf', '1', '123', 123]));

function triangle(n) {
  return (n * (n + 1)) / 2;
}
console.log('triangle', triangle(8));

function set(arr) {
  let newArr = [];

  arr.map((char) => {
    if (newArr.indexOf(char) === -1) {
      newArr.push(char);
    }
  });
  return newArr;
}
console.log('set', set([1, 2, 3, 4, 5, 5, 6, 6, 7]));
function indexMultiplier(arr) {
  if (arr.length) {
    let count = 0;
    let newArray = arr.map((num) => num * count++);
    console.log('newArray', newArray);
    let sum = newArray.reduce((total, num) => total + num, 0);
    return sum;
  } else {
    return 0;
  }
}
console.log('index mult', indexMultiplier([9, 3, 7, -7]));

function indexMul(arr) {
  if (arr.length) {
    let count = 0;
    let multArr = arr.map((num, ind) => num * ind);
    console.log('new array', multArr);
    let total = multArr.reduce((total, num) => total + num, 0);
    return total;
  } else {
    return 0;
  }
}
console.log('index mult 2', indexMul([9, 3, 7, -7]));

function filterArr(arr) {
  //filter for only string
  const filtered = [];
  arr.forEach((num) => {
    if (typeof num === 'string') {
      filtered.push(num);
    }
  });
  return filtered;
}
console.log('filtered numbers', filterArr([1, 2, 'aasf', '1', '123', 123]));

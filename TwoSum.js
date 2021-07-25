//Questions to ask the interviewer:
// Are there duplicate numbers in the array
// Are all the numbers positive or can it be any negatives
//Will there allways be a solution available
//What do we return if there is no solution
//Can there be multiple pairs that add up to the value?

//Two pointer technique
const findTwoSum = (nums, target) => {
  //Brute force, if there is a solutions this will find it:
  for (let p1 = 0; p1 < nums.length; p1++) {
    console.log({ p1, value: nums[p1] });
    const numberToFind = target - nums[p1];
    console.log({ numberToFind });
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (nums[p2] === numberToFind) {
        return [p1, p2];
      }
    }
  }
  // if there is no solution
  return null;
};
let lst = [1, 3, 7, 9, 2];
let target = 11;
console.log(findTwoSum(lst, target));

const findTwoSum2 = (lst, target) => {
  // {numberToFind: index}
  const numsMap = {}; // space O(n)
  for (let p = 0; p < lst.length; p++) {
    // time O(n)
    console.log({ p, value: lst[p] });
    const currentMapVal = numsMap[lst[p]];
    console.log({ currentMapVal });
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      let numberToFind = target - lst[p];
      console.log({ numberToFind });
      numsMap[numberToFind] = p;
    }
  }
  return null;
};

console.log(findTwoSum2(lst, target));

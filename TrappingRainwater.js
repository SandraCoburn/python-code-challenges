// Given an array of integers representing an elevation map where the width of each bar is 1,
// return how much rainwater can be trapped

// [ 0,1,0,2,1,0,3,1,0,1,2]  answer: 8

// Step 1: Verify the constraints
// Do the left and rigth sides of the graph count as walls? No, the sides are not walls
// Will there be negative integers? No, assume all integers are positive
// Step 2: Edge cases
// [] 0
// [3] 0
// [3,4,3] 0

// Step 3: Figure out the solution
// We need to go throught he whole array
// The height of the wall is the smaller number
// The smaller block affects the amount of water
// Greatest values on right and left determines how much water to hold
//cH = current height
// current watter = min(maxL, maxR) - cH
// total =
// maxL = 0
// maxR = 0

const trappWater = (arr) => {
  let totalWater = 0;
  for (let p = 0; p < arr.length; p++) {
    let leftP = p,
      rightP = p,
      maxL = 0,
      maxR = 0;
    console.log({ rightP, maxL, maxR });

    while (leftP >= 0) {
      maxL = Math.max(maxL, arr[leftP]);
      leftP--;
      console.log({ maxL, leftP });
    }
    while (rightP < arr.length) {
      maxR = Math.max(maxR, arr[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxL, maxR) - arr[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};
arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
console.log(trappWater(arr));

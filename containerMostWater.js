// You are given an array of positive integers where each integer represents the
//height of a vertical line on a chart. Find two lines which together with the x-axis
// form a container that would hold the greatest amount of water. Return the area
// of water it would hold.

// Greatest means Max, we have to go through all numbers
// [7,1,2,3,9] area = lenght * width a=left b=right
// min(a,b) * (bi - ai)    maxArea = 0
// ex. min(7,1) * (1 - 0) = (1) * (1) = 1  maxArea = 1

//Brute force solution:
const mostWaterCont = (arr) => {
  let maxArea = 0;
  for (let p1 = 0; p1 < arr.length; p1++) {
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      const height = Math.min(arr[p1], arr[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
      console.log(maxArea);
    }
    // let area = Math.min(arr[p1], arr[p1 + 1]) * arr[p1 + 1] - arr[p1];
    // maxArea = Math.max(maxArea, area);
  }
  return maxArea;
};
arr = [7, 1, 2, 3, 9]; // time complexity 0(n^2)  space 0(1)
console.log(mostWaterCont(arr));

//Shifting pointers solution
const mostWaterCont2 = (arr) => {
  let p1 = 0;
  let p2 = height.length - 1;
  let maxArea = 0;
  while (p1 < p2) {
    const height = Math.min(arr[p1], arr[p2]);
    const width = p2 - p1;
    area = height * width;
    maxArea = Math.max(maxArea, area);
    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};

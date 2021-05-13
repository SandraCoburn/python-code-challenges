/**
 * Given an integer array, output all the unique pairs that sum up to a specific value k.
 * so the input:
 *  pair_sum([12,2,2], 4)
 * would return 2 pairs:
 * (1,2)
 * (2,2)
 */

function pair_sum(arr, k) {
  //edge case check
  if (arr.length < 2) return;
  // variable for tracking
  let seen = [];
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let target = k - arr[i];
    if (seen.includes(target)) {
      output.push(Math.min((arr[i], target)), Math.max((arr[i], target)));
    } else {
      seen.push(arr[i]);
    }
  }
  return output.toString();
}

console.log(pair_sum([13, 2, 2], 4));

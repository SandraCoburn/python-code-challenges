/*
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairs(k, arr) {
  // return the number of pairs
  //sort the array descending
  // [1 5 3 4 2 ] k=2 ex. 5-3=2, 4-2=2 [5 4 3 2 1]
  //iterate through array - while loop to stopp when index2 is less array lenght
  // create a var to hold the first pointer, second pointer, and a counter

  arr.sort((a, b) => a - b);
  let count = 0;

  let ind1 = 0,
    index2 = 1,
    pairs = 0;
  while (index2 < arr.length) {
    let diff = arr[index2] - arr[ind1];
    if (diff === k) pairs++, index2++;
    if (diff < k) index2++;
    if (diff > k) ind1++;
  }
  return pairs;
}

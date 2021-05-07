/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
  // create our "p"
  // concanate n * k
  // add the digits using recursion
  // call recursiveDigit on p

  let p = n.repeat(k);
  console.log('p', p);
  return recursiveDigit(p);
}
function recursiveDigit(n) {
  // find the base case, if n is a single digit return n
  console.log('recursive n', n);
  if (n.length === 1) return Number(n);
  //traverse over the number and return the sum of what we got. Each digit is str, converto to int
  // total: int
  // call recursive function on the result(as a string)
  let total = 0;
  for (let num = 0; num < n.length; num++) {
    total = total + Number(n[num]);
  }
  return recursiveDigit(total.toString());
}

/**
 * To optimize we will add the n number before concating and then multiply by k:
 * 
 function superDigit(n, k) {
     // dreate our "p"
    // concanate n * k
   // add the digits using recursion
   // call recursiveDigit on p
let super_n = recursiveDigit(n)

let p = super_n * k

return  recursiveDigit(p.toString())

}
 */

/**
 * Given a divisor and a bound, find the larges integer N such that:
 * N is divisible by divisor,
 * N is less thatn or equal to bound,
 * N is greater than 0
 * ex.
 * For divisor = 3 and bound = 10, the output shoudl be maxMultiple(divisor, bound) = 9
 */

function maxMultiple(divisor, bound) {
  let largestInt = 1 || Infinity;
  for (let i = 0; i <= bound; i++) {
    if (i % divisor == 0 && i <= bound) {
      largestInt = i;
      console.log('largest', largestInt);
    }
  }
  return largestInt;
}

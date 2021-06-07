// Find the greatest common denominator of two numbers using Euclid's algorithm

function greatestCommonDenominator(a, b) {
  //dive a by b then look at the reminder. If remainder r is 0 then stop. GCD is b
  // otherwise set a to b, b to r, and repeat at step 1 until r is 0

  while (b != 0) {
    let t = a;
    a = b;
    b = t % b;
    console.log('b ', b);
  }
  return a;
}

console.log(greatestCommonDenominator(60, 96)); // should be 12
console.log(greatestCommonDenominator(20, 8)); // should be 4

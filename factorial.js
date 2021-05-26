/**
 *
 * In mathematics, the factorial of a non-negative integer n, denoted by n!,
 * is the product of all positive integers less than or equal to n. For example:
 * 5! = 5 * 4 * 3 * 2 * 1 = 120
 *
 *
 */

function factorial(n) {
  let total = 1;
  for (let i = n; i > 0; i--) {
    total = total * i;
  }
  return total;
}

console.log(factorial(5));

function factorialRecursive(n) {
  return n > 1 ? n * factorialRecursive(n - 1) : 1;
}

console.log(factorialRecursive(5));

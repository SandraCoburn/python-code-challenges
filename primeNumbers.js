// const isPrimeNumber = (x) => {
//   if (x === 2) return true;
//   if (x % 2 === 0) return false;
//   for (let factor = 3; factor <= Math.sqrt(x); factor += 2) {
//     if (x % factor === 0) {
//       return false;
//     }
//     return true;
//   }
// };

// //Check if it's prime
// const getLargestPrimeFactor = (n) => {
//   let largestPrimeFactor;
//   for (let factor = 2; factor <= Math.sqrt(n); factor++) {
//     if (n % factor === 0 && isPrimeNumber(factor)) {
//       largestPrimeFactor = factor;
//     }
//   }
//   return largestPrimeFactor;
// };

// const getLargestPrimeFactor = (n) => {
//   let largestPrime,
//     factor = 2;
//   while (n > 1) {
//     if (n % factor == 0) {
//       largestPrime = factor;
//       n = n / factor;
//       while (n % factor == 0) {
//         n = n / factor;
//       }
//     }
//     factor += factor === 2 ? 1 : 2;
//   }
//   return largestPrime;
// };

// console.log(getLargestPrimeFactor(9));

// //2nd solution Check if is prime first
// function primality(n) {
//   //edge: 1 is not prime
//   if (n < 2) return false;
//   //Loop over starting at 2 and ending just befoe n
//   for (let i = 2; i < n; i++) {
//     // check if n is divisible by i
//     if (n % i === 0) {
//       // if it does then return it's not prime
//       return false;
//     }
//   }
//   // return it's prime
//   return true;
// }

//get all factors of a number
function primeFactors(number) {
  //We start with 2 because that's the first prime number
  for (let n = 2; n <= number / n; n++) {
    console.log('n = ', +n + 'number= ' + number);
    //take all the factors
    while (number % n === 0) {
      number = number / n;
      console.log('Factor = ' + n);
      return n;
    }
  }
  if (number > 1) {
    console.log('last factor =' + number);
    return number;
  }
}
console.log('Prime factors', primeFactors(36));

function isPrime(n) {
  //first prime is 2
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(23));

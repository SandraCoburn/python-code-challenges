/**
 * Try visualizing on sketch.io/sketchpad/
 * Recursion: when a function call itself in it
 * It always has a base case
 * recurrence relation
 * recursion increases space complexity because the recursion stack. The height of the tree is the best way
 * to measure the space complexity
 * Memoization is when we use a hash table in recursion, otherwise it's called cache
 * Davis has a number of staircases in his house and he likes to climb each staircase 1, 2, or 3 steps at a time.
 *  Being a very precocious child, he wonders how many ways there are to reach the top of the staircase.

Given the respective heights for each of the  staircases in his house,
 find and print the number of ways he can climb each staircase.

Example
n=5

The staircase has  steps. Davis can step on the following sequences of steps:
11111
1112
1121
121
 */

/*
 * Complete the 'stepPerms' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function stepPerms(n) {
  // set a counter variable to keep track of how many ways
  // return the number of different ways to climb the stairs

  // find a base case
  // if the steps left is negative, return 0
  // if we have no steps left, return 1
  // memoization: if cache[n]  exists, return the cache
  // call our function recursively
  //cache[n] = stepPerms(n-1)) + n-2 + n-3
  // return what's in our cache
  const hashTable = {};
  function stairs(n) {
    if (n === 0) return 1;
    if (n < 0) return 0;
    if (hashTable[n]) {
      return hashTable[n];
    } else {
      hashTable[n] = stairs(n - 1) + stairs(n - 2) + stairs(n - 3);
      return hashTable[n];
    }
  }

  return stairs(n);
}
function memoSteps(n) {
  const cache = {};
}

/*
Python solution:

def stepPerms(n):


def memoSteps(n):
  cache = {}
  def stairs(n):
    if n in cache:
      return cache[n]
    if n == 0:
      return 1
    if n < 0;
      return 0
    cache[n] = stairs(n-1) + stairs(n-2) + stairs(n-3)
    return cache[n]
  return stairs(n)


*/

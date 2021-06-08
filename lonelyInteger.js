/**
 * 
 * {Given an array of integers, where all elements but one occur twice, find the unique element.

Example
a = [1,2,3,4,3,2,2]
The unique element 4
 */
function lonelyinteger(a) {
  if (a.length === 1) return a[0];
  const filteredA = a.filter((num) => {
    return a.indexOf(num) === a.lastIndexOf(num);
  });
  return filteredA[0];
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));

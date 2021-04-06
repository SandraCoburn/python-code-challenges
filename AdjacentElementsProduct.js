//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function adjacentElementsProduct(inputArray) {
  let highProductNum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < inputArray.length; i++) {
    console.log(i);
    let firstNum = inputArray[i];
    let nextNum = inputArray[i + 1];
    let currProd = firstNum * nextNum;
    if (currProd > highProductNum) {
      highProductNum = currProd;
    }
    console.log('hii prod', highProductNum);
  }
  return highProductNum;
}

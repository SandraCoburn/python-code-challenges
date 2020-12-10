// Given an array of integers, find the largest product yielded from three of the integers
const unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

//Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
const computeProduct = (unsorted) => {
  let sortedArray = unsorted.sort((a, b) => a - b),
    product1 = 1,
    product2 = 1,
    array_n_element = sortedArray.length - 1;

  //Get the product of three larges integers in sorted array
  for (let num = array_n_element; num > array_n_element - 3; num--) {
    product1 = product1 * sortedArray[num];
  }
  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];
  if (product1 > product2) return product1;
  return product2;
};

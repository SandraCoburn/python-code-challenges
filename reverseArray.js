function reverseArr(str) {
  str = str.split('');
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex) {
    //swap characters
    const temp = str[leftIndex];
    str[leftIndex] = str[rightIndex];
    str[rightIndex] = temp;

    //move towards the middle
    leftIndex++;
    rightIndex--;
  }
  console.log(str);
  return str.join('');
}
const str = 'Mycode';
console.log(reverseArr(str));

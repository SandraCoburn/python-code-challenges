// use a recursive algorithm to find a maximum value

let items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];

function findMax(items) {
  //breaking condition. Last item in list? return it
  if (items.length == 1) return items[0];
  //otherwise get the first item and call function again to operate on the rest of the list
  let op1 = items[0];
  let op2 = findMax(items.splice(1));
  console.log('op2', op2);

  //perform the comparison when we're down to just two
  if (op1 > op2) {
    return op1;
  } else {
    return op2;
  }
}

console.log(findMax(items));

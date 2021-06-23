/**
 * Given all three arrays, write a funtion to check that my service is first-com, first-served.
 * All food should come out in the same order customers requested it
 */

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  //base case
  if (servedOrders === 0) {
    return true;
  }
  //if the firs order in servedOrdes is the same as the first order in takeoutOrders
  //making sure first that we have an order in takeOutOrders
  if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]) {
    //take the first order off takeOutOrders and serevedOrders and recurse
    return isFirstComeFirstServed(
      takeOutOrders.slice(1),
      dineInOrders,
      servedOrders.slice(1)
    );

    // if the first order in serveOrder is the same as the first in dineInOrder
  } else if (dineInOrders.length && dineInOrders[0] === servedOrders[0]) {
    //take the first order off dineInOrder and servedOrders and recurse
    return isFirstComeFirstServed(
      takeOutOrders,
      dineInOrders.slice(1),
      servedOrders.slice(1)
    );

    //first order in servedOrders doesn't match the first in takeOutOrders or dineInOrder, so we know it's not first-come, first-served
  } else {
    return false;
  }
}

let takeOutOrders = [17, 8, 24];
let dineInOrders = [12, 19, 2];
let servedOrders = [17, 8, 12, 19, 24, 2];
let takeOutOrders2 = [1, 3, 5];
let dineInOrders2 = [2, 4, 6];
let servedOrders2 = [1, 2, 4, 6, 5, 3];
console.log(
  'first solution',
  isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders)
);

//Optimized
/*
We walk through servedOrders, seeing if each customer order so far matches a customer order
from one of the two registers. To check this, we:

1. Keep pointers to the current index in takeOutOrders, dineInOrders, and servedOrders.
2. Walk through servedOrders from beginning to end.
3. If the current order in servedOrders is the same as 
the current customer order in takeOutOrders, 
increment takeOutOrdersIndex and keep going. 
This can be thought of as "checking off" the current customer order in takeOutOrders and servedOrders,
 reducing the problem to the remaining customer orders in the arrays.
4. Same as above with dineInOrders.
5. If the current order isn't the same as the customer order at the front of takeOutOrders or dineInOrders, 
we know something's gone wrong and we're not serving food first-come, first-served.
6. If we make it all the way to the end of servedOrders, 
we'll check that we've reached the end of takeOutOrders and dineInOrders. 
If every customer order checks out, that means we're serving food first-come, first-served.
*/
function isFirstComeFirstServed2(takeOut, dineIn, served) {
  let takeOutIndex = 0;
  let dineInIndex = 0;
  let takeOutOrdersMaxIndex = takeOut.length - 1;
  let dineInMaxIndex = dineIn.length - 1;

  for (let i = 0; i < served.length; i++) {
    let order = served[i];

    //if we still have orders in takeOut
    // and the current order intakeOut is the same
    // as the current order in served
    if (
      takeOutIndex <= takeOutOrdersMaxIndex &&
      order === takeOutOrders[takeOutIndex]
    ) {
      takeOutIndex++;

      //if we still have orders in dineIn
      //and the current order in dineIn is the same as the current order in served
    } else if (dineInIndex <= dineInMaxIndex && order === dineIn[dineInIndex]) {
      dineInIndex++;

      //if the current order in served doesn't match the current
      //order in takeOut or dineIn, then we're not serving first-come, first-served
    } else {
      return false;
    }
  }
  // check for any extra orders at the end of takeOut and dineIn
  if (dineInIndex != dineIn.length || takeOutIndex != takeOut.length) {
    return false;
  }

  //all order ins erved have been accounted for so we're serving first-come, first-served
  return true;
}
console.log(
  'second solution',
  isFirstComeFirstServed2(takeOutOrders2, dineInOrders2, servedOrders2)
);

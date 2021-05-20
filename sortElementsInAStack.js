//Given a Stack class like the following:

class Stack {
  constructor() {
    this.storage = [];
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  printContents() {
    this.storage.forEach((elem) => console.log(elem));
  }
}

function sortStack(input_stack) {
  console.log(input_stack);
  //init second stack
  const output_stack = new Stack();
  //Loop > stop when first stack is empty
  let temp = null;
  while (!input_stack.isEmpty()) {
    //put the top of the first stack in a temp var
    if (temp === null) {
      temp = input_stack.pop();
    }

    // if the second stack is empty or temp > the top of the second stack
    if (output_stack.isEmpty() || temp > output_stack.peek()) {
      // push temp to the second stack
      output_stack.push(temp);
      temp = null;
    } else {
      //else:
      //pop the top of the second and push to the first

      input_stack.push(output_stack.pop());
    }
  }
  return output_stack;
}

/**
 * Write a function sortStack that receives a stack of integers 
 * and returns another stack containing those same integers in sorted order. 
 * You may use at most one additional stack to hold items, 
 * but you may not copy the elements into any other data structure.

Example:
 */
const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

const sortedStack = sortStack(s); // sortedStack is also a Stack instance

console.log(sortedStack.printContents()); // should print 1, 4, 5, 6, 8, 10

/**
 * Solution:
 * Declare a variable to hold the bigest: var highestEle = put first number out of stack
 * pop up the first element and add it to var highestEle
 * Decide if you want largest on top of next stack or on botton. Lest do highest on top
 * pop up second element and compare to highestEle
 * If smaller than highestEle,  add element to second stack if not add it to highestEle
 * if the number is bigger put it back in the first stack
 * Do it all over again till the end of the first stack
 *
 */

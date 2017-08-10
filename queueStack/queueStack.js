/**
 * Write a stack class (you did this in the Data Structures I sprint).
 *  Once you're done, implement a queue using two stacks.
 */

 class Stack {
  constructor() {
    this.input = [];
    this.output = [];
  }
  add(value) {
    this.input.push(value);
    
  }
  remove() {
    let inputStackValue;
    if (this.output[0] === null) {
      for (let i = 0; i < input.length; i++) {
        inputStackValue = this.input.pop();
        this.output.push(inputStackValue);
        i--;
      }
    }
    return this.output.pop();
  }
}

// stack last in first out
// queue first in first out

// If ( Output Stack is Empty)
//     pop every element in the Input Stack
//     and push them to the Output Stack until Input Stack is Empty

// pop from Output Stack
/**
 * Write a stack class (you did this in the Data Structures I sprint).
 *  Once you're done, implement a queue using two stacks.
 */

// Stacks: First in Last out. Each new item pushes the previous ones further in. Pringles can. Push - pop.
// Queues: First in First out. Each new item goes through until it's removed. Waiting line. Push - shift.

 class Stack {
   constructor() {
     this.stack = []
   }

   add(item) {
     this.stack.push(item);
     return this.stack;
   }

   remove() {
     if (this.stack.length > 0) {
       this.stack.pop();
       return this.stack;
     } else return `Nothing in stack to remove.`;
   }
 }

class Queue {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }

  add(...args) {
    args.forEach((value) => {
      this.stack1.add(value);
    });
  }

  remove() {
    while (this.stack1 !== 0) {
      this.stack1.forEach((value) => {
        this.stack2.push(value);
      });
    }
    return this.stack2.pop();
  }

  view() {
    console.log(this.stack1, this.stack2);
  }
}

const test = new Queue;
console.log(test.add(1, 2, 3));
test.view();
console.log(test.remove());
test.view();

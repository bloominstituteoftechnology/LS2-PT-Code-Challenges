/**
 * Write a stack class (you did this in the Data Structures I sprint).
 *  Once you're done, implement a queue using two stacks.
 */

 class Stack {
   constructor () {
     this.stack = [];
   }
   enqueue(item) {
     this.queue.unshift(item);
   }
   dequeue(item) {
     const pop = this.queue.pop(item);
     return pop;
   }
 }

const stk1 = new Stack();
const stk2 = new Stack();

/* from https://stackoverflow.com/questions/69192/how-to-implement-a-queue-using-two-stacks
stk1.push(1, 2, 3)--> push each input element into stk1
stk1 = [3, 2, 1]
if stk2 is empty, dequeu all elements from stk1
dequeue items from stk2 */

const stacks = (...args) => {
  forEach(...args) {
    stk1.enqueue(...args);
  }

}

return queue;

/*Tai's solution:
class Stack {
  constructor() {
    this.storage = [];
  }

  add(item) {
    this.storage.push(item);
  }

  remove() {
    return this.storage.pop();
  }

  get length() {
    return this.storage.length;
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(item) {
    this.stack1.add(item);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      const length = this.stack1.length;
      for (let i = 0; i < length; i++) {
        this.stack2.add(this.stack1.remove());
      }
    }
    return this.stack2.remove();
  }
} */

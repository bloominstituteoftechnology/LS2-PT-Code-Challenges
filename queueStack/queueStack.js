/**
 * Write a stack class (you did this in the Data Structures I sprint).
 *  Once you're done, implement a queue using two stacks.
 */

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
}
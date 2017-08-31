/**
 * Write a stack class (you did this in the Data Structures I sprint).
 *  Once you're done, implement a queue using two stacks.
 */
 class Stack {
   constructor() {
     this.storage = [];
   }
   add(x) {
     this.storage.push(x);
   }
   remove() {
     return this.storage.pop();
   }
   get size() {
     return this.storage.length;
   }
 }

class Queue {
  constructor() {
    this.input = new Stack();
    this.output = new Stack();
  }
  enqueue(x) {
    this.input.add(x);
  }

  dequeue () {
  if (this.output.length ===  0) {
    const len = this.input.length;
    for ( let i = 0; i < len; i++) {
      this.output.add(this.input.remove());
    }
  }
  return this.output.remove();
  }

}

const que = new Queue();
que.enqueue(4)
que.enqueue(5)
que.enqueue(6)
que.enqueue(7)
que.enqueue(8)
que.enqueue(9)
que.dequeue()
que.dequeue()

console.log(que);
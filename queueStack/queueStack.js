/**
 * Write a stack class (you did this in the Data Structures I sprint).
 *  Once you're done, implement a queue using two stacks.
 */

class Queue {
  constructor(size = 0) {
    this.inbox = [];
    this.outbox = [];
  }

  enqueue(element) {
    return this.inbox.push(element);
  }

  dequeue() {
    if (this.outbox.length === 0) {
        return this.outbox.push(this.inbox.pop());
    }
    return this.outbox.pop();
  }

  get size() {
    return this.store.length;
  }
}

let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();

console.log(myQueue);

myQueue.enqueue(4);
myQueue.dequeue();
myQueue.enqueue(5);
myQueue.dequeue();
console.log('--------------');
console.log(myQueue);
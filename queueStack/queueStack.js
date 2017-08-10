/**
 * Write a stack class (you did this in the Data Structures I sprint).
 *  Once you're done, implement a queue using two stacks.
 */

 class Stack {
  constructor() {
    this.storage = [];
  }
  add(x) {
    return this.storage.push(x);
  }
  remove(y) {
    return this.storage.pop(y);
  }
}


class Queue {
  constructor() {

    this.pushS = new Stack();
    this.popS = new Stack();
  }
  enqueue(x) {
    return this.pushS.add(x);
  }
  dequeue() {
    let poping = this.popS;
    let pushing = this.pushS;

    const deq = poping.add(pushing.remove());
      return deq;
     
  }
}


var q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
q1.dequeue();
q1.dequeue();
q1.dequeue();
console.log('Current stat of the Queue is stored saved in the popS.');
console.log(q1);




/**
 * Write a stack class (you did this in the Data Structures I sprint).
 *  Once you're done, implement a queue using two stacks.
 */

class Stack() {
    const data = [];

    this.push = () => {
        data.push.apply(data, arguments);
    };
    this.pop = () => {
        return data.pop.apply(data, arguments);
    };
    this.size = ()  => {
        return data.length;
    };
    this.peek = () => {
        return data;
    };
}

const Queue = () => {
    let inbox = new Stack();
    let outbox = new Stack();

    this.inQueue = () => {
        inbox.push.apply(inbox, arguments);
    };
    this.outQueue = () => {
        if (outbox.size() === 0) {
            while (inbox.size())
                outbox.push(inbox.pop());
        }
        return outbox.pop();
    };
    this.size = () => {
      return inbox.size() + outbox.size();
    };
    this.peek = () => {
        return outbox.peek();
    };
}
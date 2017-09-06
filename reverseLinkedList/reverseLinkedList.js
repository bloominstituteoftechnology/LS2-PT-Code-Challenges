/* Write a function that will take the head of a singly-linked list, and reverse it,
 such that the head is now the tail, and the node that head pointed to now points to the old head (the new tail). */

 class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      // Do not modify anything inside of the constructor
    }

    addToTail(value) {
      const node = {
        value,
        next: null
      };

      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    }
  
    removeHead() {
      if (this.head === null) {
        return null;
      }

      if (this.head === this.tail) {
        const value = this.head.value;
        this.head = null;
        this.tail = null;
        return value;
      }

      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
    
    contains(value) {
      if (this.head === null) {
        return false;
      }

      const searchLinkedList = (node) => {
        if (node.value === value) {
          return true;
        }
        if (node.next === null) {
          return false;
        }
        return searchLinkedList(node.next);
      };

      return searchLinkedList(this.head);
    }
  }

const list = new LinkedList();
list.addToTail('a');
list.addToTail('b');
list.addToTail('c');
list.addToTail('d');
list.addToTail('e');
list.addToTail('f');

(() => {
    const toAdd = [];

    // Add all values from our Linked list to an array.
    while (toAdd[toAdd.length-1] !== null) {
        toAdd.push(list.removeHead());
    } toAdd.pop();
    console.log(toAdd);
    
    // Loop thru the array backwards and add back to the Linked list, thus reversing it.
    for (let i = toAdd.length; i > 0; i--) {
        list.addToTail(toAdd[i]);
        toAdd.pop();
        console.log(toAdd);
    }

})();
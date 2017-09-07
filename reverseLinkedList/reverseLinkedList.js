/* Write a function that will take the head of a singly-linked list, and reverse it, such that the head is now the tail, and the node that head pointed to now points to the old head (the new tail). */
// reverse a linked list  
const reverseLinkedList = function(linkedlist) {
    const node = linkedlist;
    const previous = null;
  
    while(node) {
      // save next or you lose it!!!
      const save = node.next;
      // reverse pointer
      node.next = previous;
      // increment previous to current node
      previous = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return previous;   // Change the list head !!!
  }
  linkedlist = reverseLinkedList(linkedlist);
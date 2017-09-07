/* Write a function that will take the head of a singly-linked list, and 
reverse it, such that the head is now the tail, and the node that 
head pointed to now points to the old head (the new tail). */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;


const reverseLinkedList = (node) => {
 // node.next = null then return node
 // does node exist? return
  let currentNode = node;
  let previousNode = null;
  while (currentNode) {
    
  }
};
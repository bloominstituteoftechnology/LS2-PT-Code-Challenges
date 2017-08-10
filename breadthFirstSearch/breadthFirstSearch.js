/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */

//for an array:
const BFS = (tree = [], searchTerm) => {
  let queue = tree;
  while (queue.length > 0) {
    const value = queue.shift(); //current value being compared to searchTerm, at beginning of queue
    if (value === searchTerm) return true; //stops; has found value its looking for
    if (Array.isArray(value)) queue = queue.concat(value); //if value is an array (has children) add to the queue
  }
  return false;
}

// how to do this with an object?

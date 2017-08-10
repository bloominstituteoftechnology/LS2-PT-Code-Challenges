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
<<<<<<< HEAD

const breadthFirstSearch = (tree = [], searchValue) => {
  // take in the tree
  // go through tree leaves
  // e.g. x then y then z
  // need a queue
  let queue = tree;
  while (queue.length > 0) {
    const value = queue.shift();
    if (value === searchTerm) return true;
    if (Array.isArray(value)) queue.concat(value);
  }
  return false
const tree = [
  1,
  1,
  [
    1,
    1,
    1
  ],
  2
];
console.log(breadthFirstSearch(tree, 2));
=======
>>>>>>> 9523ba66842d078bb23a24fc649e5277309ffb56

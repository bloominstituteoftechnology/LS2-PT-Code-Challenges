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

const breadthFirstSearch = (tree, value) => {
  // take in the tree
  // go through tree leaves
  // e.g. x then y then z
  Object.keys(tree).forEach((key) => {
    if (key === value) {
      return true;
    } else if (typeof key === Object) {
      breadthFirstSearch(key, value);
    } 
  })
  return false;
 };

 // this should work but it doesn't and it's not breadthFirst

const tree = {
  x: 1,
  y: 1,
  z: {
    x: 1,
    y: 1,
    z: 1,
	},
  a: 2,
};
console.log(breadthFirstSearch(tree, 2));
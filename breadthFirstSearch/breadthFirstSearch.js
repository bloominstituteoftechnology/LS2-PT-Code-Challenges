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
const tree = {
 	x: 1,
 	y: 1,
 	z: {
 		x: 1,
 		y: 1,
 		z: 5,
 		},
 	a: 3,
  };

 const breadthFirstSearch = (tree, val) => {
   let queue = tree;
   while (queue.length > 0) {
     const item = queue.shift();
     if (item === val) return true;
   }

 };
const first =  breadthFirstSearch(tree, 5);

console.log(first);

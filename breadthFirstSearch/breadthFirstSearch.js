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

// First move horizonatally across all nodes of current layer before moving onto next layer.

let value, keys, count = 0, traverseMe = [];
const tree = {
 x: 1,
 y: 1,
 z: {
	x: 1,
	y: 1,
	z: 5,
 },
 a: 5,
};

const recursMe = (tree, searchTerm) => { // O(n) linear complexity.
  count++
  console.log(`Searching through layer ${count}`);
  traverseMe = []; // Clear traverseMe on each iteration of the recursion.
  keys = Object.keys(tree); // Make array of tree keys.
  for (let i = 0; i < keys.length; i++) { // Loop through the current layer of the tree, then pass in the next layer as a tree.
    value = tree[keys[i]];
    if (value === searchTerm) console.log(`${value} is our value!`); return true;
    console.log(`${value} is not our value.`);
    if (typeof(value) === 'object') { // If we're dealing with a multi-nested value, we need to mark it for traversal.
      traverseMe.push(value); // Add it to the list to get traversed.
      console.log(`${value} is an object, marking to traverse`);
      // BUG Problem is that I might need to create a new traverseMe for each level so we don't traverse over things in a higher queue.
      // I am going to try and address this by clearing traverseMe on each recurse, but I'm not sure if the *higher* up version of the
      // traverseMe variable will keep their states if I do so. EDIT: It seems that they do indeed, woo!
    }
  } // If reaches here without returning true, need to go to next layer.
  if (traverseMe.length !== 0) { // If we have more to traverse, do so.
    traverseMe.forEach((tree) => {
      console.log(`Traversing into ${tree}.`);
      recursMe(tree);
    })
  } else return false; // If we have no more to traverse and we haven't yet returned true that means it's false.
}

recursMe(tree, 5) ? console.log("It is in there!") : console.log("It is not in there :(");

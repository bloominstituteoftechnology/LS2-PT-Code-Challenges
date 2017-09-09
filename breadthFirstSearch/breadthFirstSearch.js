const recursMe = (tree, searchTerm) => {
  // Set default variables.
  let value, keys;
  let flag = false;
  let traverseMe = [];

  keys = Object.keys(tree);
  for (let i = 0; i < keys.length && flag !== true; i++) { // Loop so through the keys so long as we haven't found it already.
    value = tree[keys[i]];
    if (value === searchTerm) {
      let flag = true;
      return flag;
    } else if (typeof(value) === 'object') { // If we're dealing with a multi-nested value, we need to mark it for traversal.
      traverseMe.push(value);
    }
  }

  // If there are any branches and we havne't found it yet, go one branch lower.
  if (traverseMe.length !== 0 && flag !== true) {
    traverseMe.forEach((tree) => {
       if (recursMe(tree, searchTerm)) { // If we found the item during recursion
         flag = true;
         return flag; // Return true.
       }
    })
  }
  return flag; // If we've reached the bottom that means we've exhausted our branch. Return result.
}

const tree = {
 x: 1,
 y: 3,
 z: {
	x: 2,
	y: 1,
	z: 4,
 },
 a: 5,
};

const searchTerm = 5;
recursMe(tree, searchTerm) ? console.log(`${searchTerm} was found.`) : console.log(`${searchTerm} was not found.`);

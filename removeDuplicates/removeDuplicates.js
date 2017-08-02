/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
	//code here...
  return Array.from(new Set(arr));
};

const res = removeDuplicates([1, 1, 1, 2, 2, 3, 4, 5, 5,6,7,7,8,9,5,8,9])

console.log(res);

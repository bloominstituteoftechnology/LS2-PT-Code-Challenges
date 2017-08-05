/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
	//code here...
	const sortedArray = arr.sort();
	for (let i = 0; i < sortedArray.length; i++) {
		if (sortedArray[i] === sortedArray[i + 1]) {
			sortedArray.splice(i, 1);
			i--;
		}
	}
	return sortedArray;
};



console.log(removeDuplicates([1, 1, 1,1,1, 2, 2, 3, 4, 5, 5]));

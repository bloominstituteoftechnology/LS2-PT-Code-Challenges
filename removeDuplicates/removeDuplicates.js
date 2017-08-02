/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
	const newArr = [];
	for (var i = 0; i < arr.length; i++) {
    	if (arr[i + 1] !== arr[i]) newArr.push(arr[i]);
    }
	return newArr;
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 4, 5, 5]));
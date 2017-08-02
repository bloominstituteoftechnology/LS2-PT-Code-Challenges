/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
	//code here...
	let i = 0;
	while (i < arr.length) {
		if (arr[i] === arr[i + 1]) {
			arr.splice(i + 1, 1);
			i = i;
		} else i++;
	}
	return arr;
};

/* Uncomment to see answers/verify
const myArr = [1, 1, 1, 2, 2, 3, 4, 5, 5];

console.log(removeDuplicates(myArr));*/
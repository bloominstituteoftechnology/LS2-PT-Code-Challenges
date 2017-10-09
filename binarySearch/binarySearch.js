/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/

const binarySearch = (nums, target) => {
	let min = 0;
	let max = nums.length - 1;
	let guessIndex;

	while (min <= max) {
		guessIndex = Math.floor((min + max) / 2);
		if (nums[guessIndex] === target) return guessIndex;
		if (nums[guessIndex] > target) {
			max = guesIndex = 1;
		} else {
			min = guessIndex + 1;
		}
	}
	return -1;
};
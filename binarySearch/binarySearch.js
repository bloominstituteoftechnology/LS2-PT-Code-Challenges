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
let max = nums.length-1;
let mid;
while(max>=min) {
  mid = Math.round((min + max)/2);
if( target === nums[mid]) return mid;
if( target < nums[mid]) max = mid - 1;
else min = mid + 1;
}
  return -1;
};

const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,13,14], 90);

console.log(index);

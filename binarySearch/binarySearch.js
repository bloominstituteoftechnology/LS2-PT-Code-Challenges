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
  while(max >= min) {
  let mid = Math.round((min + max)/ 2);
  if(target === nums[mid]) return mid;
  else if(nums[mid] < target) min = mid + 1 ;
  else max = mid - 1;
  }
  console.log('The target doesnt exist');
};

const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,13,14], 13);

console.log(index);

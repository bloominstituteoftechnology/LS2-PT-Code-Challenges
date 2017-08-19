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
// Set L to 0 and R to n − 1.
// If L > R, the search terminates as unsuccessful.
// Set m (the position of the middle element) to the floor (the largest previous integer) of (L + R) / 2.
// If Am < T, set L to m + 1 and go to step 2.
// If Am > T, set R to m − 1 and go to step 2.
// Now Am = T, the search is done; return m.
  let leftBound = 0;
  let rightBound = nums.length - 1;
  let currentIndex = 0;
  let currentElement = 0;

  while(leftBound <= rightBound) {

    currentIndex = Math.round((leftBound + rightBound) / 2);
    currentElement = nums[currentIndex];

    if (currentElement < target) {
      leftBound = currentIndex + 1;
    } else if (currentElement > target) {
      rightBound = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return false;
};

const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
console.log(index); // 1
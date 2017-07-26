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
    let startIndex = 0;
    let stopIndex = nums.length - 1;
    let middle = Math.floor((stopIndex + startIndex) / 2);
    while(nums[middle] !== target && startIndex < stopIndex) {
        if (target < nums[middle]) {
            stopIndex = middle -1;
        } else if (value > nums[middle]) {
            startIndex = middle + 1;
        }
        middle = Math.floor((stopIndex + startIndex) / 2);
    }
    return (nums[middle] !== target) ? -1 : middle;
};

 const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 console.log(index); // 1
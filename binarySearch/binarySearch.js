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
    let first = 0;
    let last = nums.length-1;
    let middle = Math.round((first+last)/2);
     console.log(first);
     console.log(last);
     console.log(middle);

    while (first <= last) {
    	if (nums[middle] < target) {
    		first = middle + 1;
    		console.log(`first: ${first}`);
    	} else if (nums[middle] === target) {
    		console.log(`middleFound: ${middle}`);
    		return middle;
    	} else {
    		last = middle - 1;
    		console.log(`last: ${last}`);
    	}
    	middle = Math.round((first + last)/2);
    	console.log(`middle: ${middle}`);
    }
      if (first > last) {
      	return -1;
      } 
};

const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
console.log(index); // 1
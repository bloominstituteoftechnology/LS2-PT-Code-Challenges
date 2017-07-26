/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

const binarySearch = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
};
const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
console.log(index); // 1
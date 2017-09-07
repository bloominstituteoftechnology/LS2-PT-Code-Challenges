/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */

const quickSort = (nums) => {
    if( nums.length <= 1) return nums;
    let pivot = nums.length/2;
    const left = [];
    const right = [];
    for (let i = 0; i < nums.length-1; i++) {
        if( nums[i] < pivot) {
            left.push(nums[i]);
        } 
        else right.push[nums[i]];
    }
    return [].concat(...quickSort(left), pivot ,...quickSort(right));
};


console.log(quickSort([2,6,4,5,1,3,4,2,5,8,9,55,1]));
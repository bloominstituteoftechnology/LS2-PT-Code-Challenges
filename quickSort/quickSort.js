/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */

const quickSort = (nums) => {
  if (nums.length <= 1) return nums;
  // create a lessThan
  // create a greaterThan
  const lessThan = [];
  const greater = [];
  const pivot = nums.splice(Math.floor(Math.random * nums.length), 1);
  for (let i = nums.length -1; i >= 0; i--) {
    if (nums[i] < pivot) {
      lessThan.push(nums[i]);
    } else {
      greater.push(nums[i]);
    }
  }
  return [].concat(quickSort(lessThan), pivot, quickSort(greater));

};

const nums = [0,15,-33, .5, 44,1000, 1]

console.log(quickSort(nums));

// algorithm quicksort(A, lo, hi) is
// if lo < hi then
//     p := partition(A, lo, hi)
//     quicksort(A, lo, p – 1)
//     quicksort(A, p + 1, hi)

// algorithm partition(A, lo, hi) is
// pivot := A[hi]
// i := lo - 1    
// for j := lo to hi - 1 do
//     if A[j] < pivot then
//         i := i + 1
//         swap A[i] with A[j]
// if A[hi] < A[i + 1] then
//     swap A[i + 1] with A[hi]
// return i + 1
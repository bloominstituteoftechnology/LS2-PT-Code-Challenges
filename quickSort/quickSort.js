/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 *solution: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-quicksort-algorithm/
 */

const quickSort = (nums) => {
  const pivot = nums[0];
  let bigger = [];
  let smaller = [];

  if(nums.length < 2) console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] > pivot) bigger.push(nums[i]);
    if(nums[i] < pivot) smaller.push(nums[i]);
  }

  bigger = bigger.sort();
  smaller = smaller.sort();
  let newArr = smaller.concat(pivot, bigger);
  return newArr;
};

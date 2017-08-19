/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */

const quickSort = (nums) => {
  let i = 0;
  let first = nums[0];
	while (i < nums.length) {
		const curr = nums[i];
		if (curr < first) {
			const rem = nums.splice(i, 1).pop();
			first = rem;
			nums.unshift(rem);
			i = 0;
		} else if (i > 0 && curr < nums[i - 1]) {
		  const rem = nums.splice(i, 1).pop();
			if (i === 1) nums.unshift(rem);
			else nums.splice(i - 2, 0, rem);
			i = 0;
		} else {
		  i++;
		}
	}
	return nums;
};

<<<<<<< HEAD

=======
>>>>>>> upstream/master
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */

<<<<<<< HEAD
const nums = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const quickSort = (nums) => {
  if(nums.length < 2) {
    return nums;
  }

  const pivot = nums[0];
  const lesser = [];
  const greater = [];

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < pivot) {
      lesser.push(nums[i]);
    } else {
      greater.push(nums[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}

console.log(quickSort(nums.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// //STOLE THIS FROM THE INTERNET
// // swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// // classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
// function quicksort(array, left, right) {
//   left = left || 0;
//   right = right || array.length - 1;

//   // var pivot = partitionLomuto(array, left, right); // you can play with both partition
//   var pivot = partitionHoare(array, left, right); // you can play with both partition

//   if(left < pivot - 1) {
//     quicksort(array, left, pivot - 1);
//   }
//   if(right > pivot) {
//     quicksort(array, pivot, right);
//   }
//   return array;
// }

// // Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
// function partitionHoare(array, left, right) {
//   var pivot = Math.floor((left + right) / 2 );

//   while(left <= right) {
//     while(array[left] < array[pivot]) {
//       left++;
//     }
//     while(array[right] > array[pivot]) {
//       right--;
//     }
//     if(left <= right) {
//       swap(array, left, right);
//       left++;
//       right--;
//     }
//   }
//   return left;
// }

// console.log(quicksort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
=======
const quickSort = (nums) => {

};
>>>>>>> upstream/master

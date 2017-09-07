/**
 * Insertion sort is a basic sorting algorithm. Insertion sort
 * iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 * https://en.wikipedia.org/wiki/Insertion_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms#insertion-sort
 **/

// Example usage:
// insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]); // yields [1, 2, 2, 3, 3, 4, 7, 8, 9]
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    // store # you're looking at
    let current = arr[i];
    let j; //needs to be outside for loop (this is closure)
    //compare current to value before it
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]; //if previous value is > current, set value of arr[j] at poistion after current
    }
    arr[j + 1] = current;
  }
  return arr;
};

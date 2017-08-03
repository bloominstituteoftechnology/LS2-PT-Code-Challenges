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

const insertionSort = (array) => {
  // Your code goes here. Feel free to add helper functions if needed.
  // move element by element left to right
  // compare the current element to elements before it.
  // look for the first occurance where the element being checked is less than
  // the element before it
  // swap the element being evaluate with the element before it
  // repeat
  let greaterThanValue;
  let lessThanValue;
  const sortedArray = array;

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] < sortedArray[i - 1]) {
      greaterThanValue = sortedArray[i - 1];
      lessThanValue = sortedArray[i];
      sortedArray.splice(i - 1, 0, lessThanValue);
      sortedArray.splice(i, 0, greaterThanValue);
      i--;
    }
  }
  return sortedArray;
};

console.log(insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]));
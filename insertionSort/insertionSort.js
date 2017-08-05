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
  arr.forEach((value, i) => { // This has to run through everything so it's all sorted.
    const currVal = arr[i];  // The value we're working on on this specific loop.

    for (var j = i - 1; j > -1; j--) { // For all elements in the array that come before currVal.
      if (currVal < arr[j]) { // If the currVal is less than the previous value.
        arr[j+1] = arr[j]; // Shift the previous value one position up.
      } else break; // If currVal is not less than previous value, it's in its correct spot, break loop.
    }
    arr[j+1] = currVal; // When we hit the correct spot for currVal (j+1), put it there.

  });

  return arr;
};

console.log(insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]))

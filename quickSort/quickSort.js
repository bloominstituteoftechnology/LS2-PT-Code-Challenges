/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */

 const partition = (arr, low, high) => {
     let pivot = arr[high];
     let i = (low - 1);

     for (let j = low; j <= high-1; j++) {
         if (arr[j] <= pivot) {
             i++;
             let temp = arr[j];
             arr[j] = arr[i];
             arr[i] = temp;
         }
     }
     let temp1 = arr[i + 1];
     arr[i + 1] = arr[high];
     arr[high] = temp1;
    console.log(arr);
    return (i+1);
 };

 const quickSort = (arr, low, high) => {
    
    if (low < high) {
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }

    return arr;
};


const arr = [100, 1, 55, 23, 79, 3, 67];
console.log(quickSort(arr,0,6));
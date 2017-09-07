/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

 const insertionSort = (arr) => {
   for (let i = 1; i < arr.length; i++) {
     let key = arr[i];
     let j = i - 1;
     while (j >= 0 && arr[j] > key) {
       arr[j + 1] = arr[j];
       j--;
     }
     arr[j + 1] = key;
   }
   return meanMedianMode(arr);
 };
const meanMedianMode = ( arr ) => {
  const result = { };
  let sum = 0;
  for( let i = 0 ; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  const res1 = sum / arr.length;
  result['mean'] = res1;
  if( arr.length % 2 !== 0 ) {
    const res2 = arr[( arr.length - 1 ) / 2];
    result['median'] = res2;
  } else {
    const ele1 = arr[Math.ceil((arr.length-1) / 2)];
    const ele2 = arr[(arr.length - 2) / 2];
    const res2 = ( ele1 + ele2 ) / 2;
    result['median'] = res2;
  }

  return result;
};

console.log(insertionSort([1,2,6,5,4 , 11, 7,8]));

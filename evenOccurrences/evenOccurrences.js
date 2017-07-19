/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 *    * console.log(onlyEven); //  4
 *    */

 const evenOccurence = (arr) => {
   // Your code here.
   const compare = {};
   arr.forEach((value, i) => {
     // Return first item that occurs an even number of times. If none, return null.
     // If there is no key called 'value', aka if first time item has appeared, create item with value of 0.
     if (value in compare) {
       compare[value] = compare[value] + 1;
     } else {
       compare[value] = 1;
     }
   });
   // Now loop thru them and find first that's even.
   for (let i = 0; i < arr.length; i++) {
     if (compare[arr[i]] % 2 === 0) {
       return arr[i];
     }
   }

   return null;
 };
// Only problem is this will take awhile, something like O(n^2)
console.log(evenOccurence([1, 7, 2, 7, 4, 5, 1, 6, 8, 9, 6, 4, 1]));
// This would work, but for some reason when using numbers as the keys in an object it sorts them..

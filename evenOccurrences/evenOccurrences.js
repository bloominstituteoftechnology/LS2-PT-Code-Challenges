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
  const test1 = 'abcdhijklmnopqrstuv'; // true
  const test2 = 'abcdefga'; // false

  test1.toLowerCase();

  for (let i = 0; i < test1.length; i++){
    for(let j = 1; j < test1.length, j++) {
      console.log(test1.charAt(i));
      console.log(test1.charAt(j));
    };
  };
};

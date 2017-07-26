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
<<<<<<< HEAD
  const a = arr.reduce((acc, curr) => {
  	if (typeof acc[curr] == 'undefined') {
  		acc[curr] = 1;
  	} else {
  		acc[curr] += 1;
  	}
  	return acc;
  }, {});
  
  const values = Object.values(a);
  const keys = Object.keys(a);
  for (let i = 0; i < values.length; i++) {
  	
  	if (values[i] % 2 == 0) {
  		return keys[i];
  	} 
  }
   return undefined;
};

const data = [1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1];
const onlyEven = evenOccurence(data);
console.log(onlyEven);
=======
};
>>>>>>> c196dd3ae8842813a734ab7abf353501ebe8d52a

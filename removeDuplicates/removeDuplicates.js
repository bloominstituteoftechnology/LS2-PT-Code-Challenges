/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
  //code here...
  const newarr = [];
  arr.forEach( (item) => {
     if (!newarr.includes(item)) {
       newarr.push(item);
     }
  } );
  return newarr;
};

const res = removeDuplicates([1, 1, 1, 2, 2, 3, 4, 5, 5])

console.log(res);

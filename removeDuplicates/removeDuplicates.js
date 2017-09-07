/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
  let newArr = [];
  //this method is more time complex and not good for big data sets
    // newArr = Array.from(new Set(arr));
    // return newArr;

  arr.forEach((item) => {
    if (!newArr.includes(item)) newArr.push(item);
  })
  return newArr;

};

/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const arr = ['abcdefga'];

const isUnique = (str) => {
  if (arr.indexOf(str) === -1) {
    return true;
  }
  return false;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false

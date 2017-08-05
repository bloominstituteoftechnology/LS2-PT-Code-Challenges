/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  // Non extra credit: Make an object with each letter as a key. If key exists already then not unique. O(n)
  // Could also use set.
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    if (letters[str[i]] !== undefined) return false;
    letters[str[i]];
  }
  return true;
};

const isUniqueExtra = (str) => {
  // Extra credit: Take alphabet, if letter exists in alphabet, remove it. If it doesn't exist it's a dup.
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let curr;
  let flag = true;

  for (let i = 0; i < str.length; i++) {
    curr = str[i];
    if (alphabet.indexOf(str[i]) !== -1) {
      alphabet = alphabet.replace(curr, '');
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false

console.log(isUniqueExtra('abcdhijklmnopqrstuv')); // true
console.log(isUniqueExtra('abcdefga')); // false

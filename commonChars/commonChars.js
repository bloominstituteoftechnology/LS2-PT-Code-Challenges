/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

// create a set
// iterate over str1
  // if char is in str2 add to set
// convert set to string
// return string

function getCommonCharacters(str1, str2) {
  const set = new Set();
  str1.split('').forEach(char => {
    if (char === ' ') return;
    if (str2.includes(char)) set.add(char);
  });
  let commonCharacters = '';
  set.forEach(char => {
    commonCharacters += char;
  });
  return commonCharacters;
}

const result = getCommonCharacters('hello world', ' hello');

console.log(result);

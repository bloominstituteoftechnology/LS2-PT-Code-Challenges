/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

const commonCharacters = (str1, str2) => {
  const obj = { ' ': 3};
  let str = '';
  str2.forEach((char) => {
    if (!obj[char]) obj[char] = 1;
  });
  str1.forEach((char) => {
    if (obj[char] === 1) {
      obj[char] = 2;
      str += char;
    }
  });
  return str;
};

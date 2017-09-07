/**
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters
 * that are common to both strings. *
 * Your function should return the common characters in the same order that
 * they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/

const returnCommon = (str1, str2) => {
  const newStr1 = str1.toLowerCase().replace(/\s+/g, '');
  const newStr2 = str2.toLowerCase().replace(/\s+/g, '');

  const common = [];

  for (let i = 0; i < newStr1.length; i++) {
    if(newStr2.indexOf(newStr1[i]) != -1) {
      common.push(newStr1[i]);
    }
  }
  const cmStr = common.join('');
  return cmStr;
};

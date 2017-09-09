/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/
const commonChars = (str1, str2) => {

    const set = new Set();
    str1.split('').forEach(val => {
        if (val === ' ') return; // Ignore spaces.
        if (str2.includes(val)) set.add(val);
    });

    let commons = '';
    set.forEach(char => {
        commons += char;
    });
    return commons;
};

console.log(commonChars('ac ex ivou', 'aegi hobu '));
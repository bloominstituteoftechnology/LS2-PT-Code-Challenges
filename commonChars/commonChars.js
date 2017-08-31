/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

const commonChars = (str1, str2) => {
    // Remove all whitespace and split into arrays.
    const arr1 = str1.replace(/ /g, '').split(''); 
    const arr2 = str2.replace(/ /g, '').split('');
    const commons = [];

    arr1.forEach((letter1) => {
        arr2.forEach((letter2) => {
            if (letter1 === letter2) commons.push(letter1);
        });
    });
    return commons;
    
};

console.log(commonChars('ac ex ivou', 'aegi hobu '));
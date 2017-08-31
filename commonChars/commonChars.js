/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are 
 * common to both strings. * 
 * Your function should return the common characters 
 * in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

const commonCharacters = (str1, str2) => {
    const chars = [];
    for( let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if(str2[j] === str1[i]) {
                if(!(chars.includes(str1[i]))) {
                chars.push(str1[i]);
            }
        }
    }
 }
    return chars.join('');
};

console.log(commonCharacters('Satish Vattikuti', 'Aishwarya Krishnamurthy'));
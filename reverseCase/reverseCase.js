/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
   const strArray = str.split('');
   for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] !== strArray[i].toUpperCase()) {   
        strArray[i] = strArray[i].toUpperCase();
    } else {
        strArray[i] = strArray[i].toLowerCase();
    }
   }
    return strArray.join(''); 
}

const testArray = 'Hello World';
console.log(reverseCase(testArray));
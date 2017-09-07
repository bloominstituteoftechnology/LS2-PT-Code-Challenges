/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
let result = '';
for (let i = 0; i < str.length; i++) {
let char = str[i];
if (char === char.toLowerCase()) {
      result = result + char.toUpperCase();
    } else {
      result = result + char.toLowerCase();
    }
  }
  return result;
};

const res = reverseCase('RAVI nandigam');

console.log(res);

/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

function reverseCase(str) {
	 let arr = str.split('');
	 let output = '';
  for (let i = 0; i < arr.length; i++) {
    let character = arr[i];
    if (character == character.toLowerCase()) {
      output = output + character.toUpperCase();
    } else {
      output = output + character.toLowerCase();
    }
    return output;
}
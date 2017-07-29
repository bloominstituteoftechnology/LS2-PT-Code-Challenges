/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 reverseCase = (input) => {
    let array = input.split('')
    let output = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i].toLowerCase()) {
            output.push(array[i].toUpperCase());
        } else {
            output.push(array[i].toLowerCase());
        }
    }
    newOutput = output.join('');
    console.log(newOutput);
 }

reverseCase('Hello World')
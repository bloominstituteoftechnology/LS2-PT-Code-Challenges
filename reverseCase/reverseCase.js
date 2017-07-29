/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const reverseCase = (str) => {
   const words = str.split(' ');
   const reverse = []
   for (let i = 0; i < words.length; i++) {
     for (let j = 0; j < words[i].length; j++) {
       let letter = words[i][j];
       if (letter === letter.toLowerCase()) letter = letter.toUpperCase();
       else if (letter === letter.toUpperCase()) letter = letter.toLowerCase();
       reverse.push(letter);
     }
   }
   return reverse.join('');
 }

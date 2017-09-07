/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
 const reverseCase = (str) => {
  let newStr = [];
  for (let i = 0; i < str.length; i++){
    let letter = str.charAt(i);
    if (letter === letter.toUpperCase()) {
      newStr.push(letter.toLowerCase());
    } else {
      if (letter === letter.toLowerCase()) {
      newStr.push(letter.toUpperCase());
      }
    }
  }
  newStr = newStr.join("");
  return newStr;
}

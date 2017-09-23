 /*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  const workingStr = str;
  let flag = true;
  for (let i = 0; i < str.length; i++) {
      for(let j = 0; j < workingStr.length; j++) {
          if (j !== i && str[i] === workingStr[j]) {
              return false;
          }
      }
  }
   return flag;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false




/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  const chars = str.split('');
  const charcodes = [];
  chars.forEach((alpha) => {
    charcodes.push(alpha.charCodeAt(0));
  });
  for (let i = 0; i < charcodes.length; i++) {
    const a = charcodes.shift();
    for (let j = 0; j < charcodes.length; j++) {
      if (a === charcodes[j]) return false;
    }
  }
  return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false

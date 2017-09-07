/*
 * Given a positive integer number, the Collatz conjecture determines the next term in the
 * sequence by either:
 * - halving the number if the number is even; or
 * - multiplying the number by three and then adding one is n is odd
 * 
 * Write a function that will take a number n, and return the Collatz chain for that
 * number. You will stop at one.
 *
 * Example: collatzSequence(23) will return:
 * [23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]
 */

const collatzSequence = (n) => {
  let sequence = [];
  let newNum = 0;
  if(n === 1) return sequence;
  if(n % 2 === 0) {
    sequence.concat(n);
    newNum = n / 2;
    collatzSequence(newNum);
  } else {
    sequence.concat(n);
    newNum = (n * 3) + 1
    collatzSequence(newNum);
  }
  return sequence;
};

console.log(collatzSequence(23));
console.log([23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]);

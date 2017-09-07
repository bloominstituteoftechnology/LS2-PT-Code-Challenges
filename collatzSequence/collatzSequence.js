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
  const result = [];
  result.push(n)
  while( n >1 ) {
    if(n%2 === 0) {
      n = n / 2;
      result.push(n);
    } else {
      n = (3*n) + 1;
      result.push(n);
    }
  }
  return result;
};

console.log(collatzSequence(23));
[ 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1 ]

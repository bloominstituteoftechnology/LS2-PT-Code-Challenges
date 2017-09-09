/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

 // Multiply: Add the first argument to itself n times where n is the second argument.
 // while( first argument minus the second argument, keep counter. How do handle non-ints? )

// 10 % 2 = 0. 9 % 2 = 1. Get remainder of division.
const multiply = (num1, num2) => {
  let total = 0;
  for (let i = 0; i < num2; i++) {
    total += num1;
  }
  return total;
};

const divide = (num1, num2) => { // TODO: account for non-whole numbers.
  let count = 0;
  while (num1-num2 >= 0) {
    num1 -= num2;
    count++;
  }
  return count;
};

const modulo = (num1, num2) => {
  while (num1-num2 >= 0) {
    num1 -= num2;
  }
  return num1
};

console.log(multiply(5, 8));
console.log(divide(10, 3));
console.log(modulo(11, 5));

/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
<<<<<<< HEAD
 */

const multiply = (x, y) => {
  const absX = x < 0 ? 0 - x : x;
  const absY = y < 0 ? 0 - y : y;
  let product = 0;
  for (let i = 0; i < absX; i++) product += absY;
  if (x < 0 && y < 0) return product;
  if (x < 0 || y < 0) return 0 - product;
  return product;
};

console.log(multiply(15, 10)); // 150
console.log(multiply(15, -10)); // -150
console.log(multiply(-15, 10)); // -150
console.log(multiply(-15, -10)); // 150
console.log(multiply(0, -10)); // 0
console.log(multiply(-15, 0)); // 0

const divide = (x, y) => {
  if (x === 0) return 0;
  if (y === 0) return NaN;
  let absX = x < 0 ? 0 - x : x;
  const absY = y < 0 ? 0 - y : y;
  let quotient = 0;
  while(absX > 0) {
    absX -= absY;
    if (absX >= 0) quotient += 1;
  }
  if (x < 0 && y < 0) return quotient;
  if (x < 0 || y < 0) return 0 - quotient;
  return quotient;
};

console.log(divide(15, 5)); // 3
console.log(divide(-15, 5)); // -3
console.log(divide(15, -5)); // -3
console.log(divide(-15, -5)); // 3
console.log(divide(15, 0)); // NaN
console.log(divide(0, 15)); // 0

const modulo = (x, y) => {
  if (x === 0) return 0;
  if (y === 0) return NaN;
  let absX = x < 0 ? 0 - x : x;
  const absY = y < 0 ? 0 - y : y;
  while (absX >= absY) absX -= absY;
  if (x < 0 && y < 0 || y < 0) return 0 - absX;
  return absX;
};

console.log(modulo(15, 0)); // NaN
console.log(modulo(15, 7)); // 1
console.log(modulo(15, -7)); // -1
console.log(modulo(-15, 7)); // -1
console.log(modulo(-15, -7)); // -1
=======
 */
>>>>>>> upstream/master

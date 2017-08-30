/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

// doesn't work for 2 negatives
/ multiply
const multiply = (x, y) => {
 let prod = 0;
 for (let i = 0; i < y; i++) {
   prod += x;
 }
 return prod;
}

//divide
const divide = (x, y) => {
 let div = 0;
 let i = Math.max(x, y);
 let big = Math.max(x, y);
 let z = Math.min(x, y);
 if (z === 0) return 'error, cannot divide by 0';
 if (i === 0) return 0;
 if (x === y) return 1;
 while (i > 0 && big > 0) {
   big -= z;
   div += 1;
   i--;
 } return div;
}

//modulo (return remainder)- doing 1 too many loops
const x = 10;
const y = 3;
let div = 0;
let i = Math.max(x, y);
let big = Math.max(x, y);
let z = Math.min(x, y);
if (z === 0) console.log('error, cannot divide by 0');
if (i === 0) console.log(0);
if (x === y) console.log(1);

while (i > 0 && big >= 0) {
  big -= z;
  div += 1;
  i--;
} console.log(big);
console.log(div);

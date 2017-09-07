/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

 const multiply = (num1, num2) => {
     let res = 0;
     for ( let i = 0; i < num2; i++) {
           res = res  + num1;
   }
     return res;
 };


  const divide = (x , y) => {
   if ( x === 0) return 0;
   if ( y === 0) return NaN;
   let absX = x > 0 ? x:0-x;
   let absY = y > 0 ? y:0-y;
   let q = 0;
   while (absX > 0)  {
    absX -= absY 
    if(absX >= 0) q++;
   }
   if( x < 0 && y < 0) return q;
   if( x < 0 || y < 0) return -q;
   return q;
 }; 

 const modulo = (x ,y) => {
   if( x === 0) return 0;
   if( y === 0) return NaN;
   let absX = x > 0 ? x : 0 - x;
   let absY = y > 0 ? y : 0 - y;
   while ( absX >= absY) {
     absX = absX -  absY; 
   }
   if ( x < 0 && y < 0 || y < 0) return 0 - absX;
   return absX;
 }

console.log(modulo(3, 2));
console.log(modulo(-8,-3));
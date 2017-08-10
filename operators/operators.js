/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

 const multiply = (num1, num2) => {
   let product = 0;

    const numA = parseInt(num1,2); 
    const numB = parseInt(num2,2);

    while (numA !== 0) {
    	//console.log(`while loop ${num1}`);
        if (numA & 1) {
        	product += numB;
        	console.log(`while loop ${product}`);
        }

        numA <<= 1;
        numB >>= 1;
    }
    return product;
 }


 const test = multiply(2,3);

 console.log(test);
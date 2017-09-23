function isPrime(num) {
 for (let i=2;i<num;i++) {
        if (num%i===0) {
        return false;
     }
   }
 return true;
}


function isTwinPrime(n) {
   if (isPrime(n)===true & n!== 2) {
        if (isPrime(n+2)===true) {
        return true;
        } else {
        if (isPrime(n-2)===true) {
        return true;
        } else {
        return false;
        }
        }
   } else {
    return false;
   }
}

console.log(isTwinPrime(9));

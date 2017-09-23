function isArmstrongNumber(num) {
  const digits = (""+num).split("");
  const digitsLen = digits.length;
  var sumIt=0;
  let working;
  let working2=0;
  
  for(let i=0; i<digitsLen;i++) {
     working = parseInt(digits[i],10);
     working = Math.pow(working, digitsLen)
     sumIt += working;
  }
  
  if (sumIt===num) {
    return true;
  } else {
    return false;
  }
}

const test = isArmstrongNumber(153);
console.log(test);



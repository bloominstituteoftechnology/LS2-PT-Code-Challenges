function collatzSequence(n) {
  // code here
  let next = n;
  const arr = [n];
  
  while(next !== 1) {
    let isEven;
    
    if (next % 2 === 0) isEven = true;
    else isEven = false;
  
    if (isEven) next /= 2;
    else next = next * 3 + 1;
    
    arr.push(next);
  }
  
  return arr;
}
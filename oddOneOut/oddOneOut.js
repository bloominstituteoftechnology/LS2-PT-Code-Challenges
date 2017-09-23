function oddOneOut (arrOfIntegers) {
  let count1 = 0;
  let count2 = 0;
  let theOdd = 0;
  let theEven = 0;
  
  arrOfIntegers.forEach((element,i) => {
      if (element%2===0) {
        if (count1===0) {
          theEven = i;
        }
        count1+=1;
     } else {
       count2+=1;
       theOdd = i;
     }
  });
  
  if (count2>count1){
    return arrOfIntegers[theEven];
  } else {
    return arrOfIntegers[theOdd];
  }
  
}

 const arr = [2, 4, 0, 100, 4, 11, 2602, 36];
//const arr = [160, 3, 1719, 19, 11, 13, -21];

console.log(oddOneOut (arr));
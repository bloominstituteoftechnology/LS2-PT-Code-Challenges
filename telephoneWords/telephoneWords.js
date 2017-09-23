//Each number key on a standard phone keypad has a set
//of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
//Businesses often try to come up with clever ways to
//spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!
//Write a function that takes up to four digits of a phone
//number, and returns a list of all of the words that can
//be written on the phone with that number. (You should
//return all permutations, not only English words.)
//Example:
//telephoneWords('2745');
//  => ['APGJ',
//       'APGK',
//       'APGL',
//       ..., // many many more of these
//       'CSIL']
//  * Tips:
//  - Phone numbers are strings! (A phone number can start
//    with a zero.)
//  - The digits 0 and 1 do not have letters associated
//    with them, so they should be left as numbers.
//  - Don't return every combination of those digits
//    in any order, just the order given.

const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

function findDuplicates(arr, str) {
  let status = false;
   arr.forEach (element => {
      if (element === str) {
        status = true;
      }
   })
   return status;
}

function telephoneWords(str) {
	let nums = str.toString().split('');
   
    const num1 = phoneDigitsToLetters[nums[0]].toString().split('');
    const num2 = phoneDigitsToLetters[nums[1]].toString().split('');
    const num3 = phoneDigitsToLetters[nums[2]].toString().split('');
    const num4 = phoneDigitsToLetters[nums[3]].toString().split('');
    let temp;
    const final = [];

    // num1.map((x) =>{
    //      num1[x];
    // });
    for (let i=0; i<num1.length;i++) {
    	  for (let j=0; j<num2.length; j++) {
    	  	for(let k=0; k<num3.length; k++) {
    	  		for (let l=0; l<num4.length; l++) {
    	  		temp = num1[i]+num2[j]+num3[k]+num4[k];
    	  			if (findDuplicates(final,temp)===false) {
    	  			final.push(num1[i]+num2[j]+num3[k]+num4[k]);
    	  			}
    	  	  }
    	  	}  	
    	}
    }

    
   return final;
}


console.log(telephoneWords('2745'));
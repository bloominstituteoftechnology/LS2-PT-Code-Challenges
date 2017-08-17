

// const arr = [1,2,3];


// const nFactorial = (n) => {
//   // return the factorial for n
//   // solve this recursively
//   // example:
//   // the factorial of 3 is 6 (3 * 2 * 1)
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * nFactorial(n - 1);
// };

// //console.log(nFactorial(3));

// const arrFactorials = [nFactorial(5), nFactorial(3)];





// arrFactorials.forEach((element,i) => {
//    console.log(element);
// });


const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

const firstItem = (elements, cb) => {
     elements.forEach((data,i) =>{
         cb(data);
     });
     //cb(elements[0]);
};

firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});




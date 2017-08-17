/* Implement the function parallel:
 *
 * Parallel has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a callback and invokes that callback when complete.
 *
 * The callback passed to parallel is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to parallel.
 *
 * Once all the callbacks of the tasks are returned, parallel should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * parallel([
 *  function(callback){
 *    setTimeout(function(){
 *      callback('one');
 *    }, 200);
 *  },
 *  function(callback){
 *    setTimeout(function(){
 *      callback('two');
 *    }, 100);
 *  }
 * ],
 *  // optional callback
 *  (results) => {
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
      console.log(results); // ['one', 'two']
 * });
 *
 *
 */


const nFactorial = (n) => {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

//console.log(nFactorial(3));

const arrFactorials = [nFactorial(5), nFactorial(3)];


//console.log(arrFactorials[0]);
//console.log(arrFactorials[1]);



// parallel([ function(callback) {    
// 	        setTimeout(function(){
//             callback('one');
//            }, 200);
//            }, function(callback){
//             setTimeout(function(){
//             callback('two');
//           }, 100);
//           }], // optional callback
//             (results) => {
//              // the results array will equal ['one','two'] even though
//              // the second function had a shorter timeout.
//            console.log(results); // ['one', 'two']
//           });

const parallel = (arr, cb) => {
        arr.forEach((data, i) => {
          cb(data);
        });
};

parallel(arrFactorials, (tasks) => {
     console.log(tasks);
     // arrFactorials.forEach((element,i) => {
     // 	console.log(element);
     //   return element;
     // });
});


//const testP = parallel(arrFactorials);
//console.log(testP);






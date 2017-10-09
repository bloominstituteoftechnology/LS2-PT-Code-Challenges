
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
  Example:
 */
  


function parallel (async_calls, shared_callback) {
    var counter = async_calls.length;
    var all_results = [];
    function makeCallback (index) {
      return function () {
        counter --;
        var results = [];
        // we use the arguments object here because some callbacks 
        // in Node pass in multiple arguments as result.
        for (var i=0;i<arguments.length;i++) {
          results.push(arguments[i]);
        }
        all_results[index] = results;
        if (counter == 0) {
         return shared_callback(all_results);
        }
      }
    }
  
    for (var i=0;i<async_calls.length;i++) {
      async_calls[i](makeCallback(i));
    }
  }

 parallel([
   function(callback){
     setTimeout(function(){
       callback('one');
     }, 200);
   },
   function(callback){
     setTimeout(function(){
       callback('two');
     }, 100);
   }
  ],
   // optional callback
   (results) => {
     // the results array will equal ['one','two'] even though
     // the second function had a shorter timeout.
      console.log(results); // ['one', 'two']
  });
 
  
  
 
 
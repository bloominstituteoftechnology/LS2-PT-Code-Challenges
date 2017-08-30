/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */
 const nums = [5, 6, 7, 8, 5, 10];
 let sum = 0;
 let avg;

 //mean = average
 for(let i = 0; i < nums.length; i++) {
   sum += nums[i];
 }
 avg = sum/nums.length;
 return avg;

 //median = sort in order, pick middle number
 let newNums = nums.sort(function(a, b) {
   return a - b;
 });
 const position = Math.round((newNums.length-1)/ 2);
 let median = newNums[position];
 return median;

 //mode= number that appears most often
 let newNums = nums.sort(function(a, b) {
   return a - b;
 });
 var obj = { };
 for (var i = 0, j = newNums.length; i < j; i++) {
    obj[newNums[i]] = (obj[newNums[i]] || 0) + 1;
 }
 console.log(obj);

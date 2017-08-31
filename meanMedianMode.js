/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */
 const nums = [5, 6, 7, 8, 5, 10];

 //mean = average
 let sum = 0;
 let avg;
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

//mode = number that appears most often
let obj = { };
let freq = 0;
let mode;
for (let i = 0, j = nums.length; i < j; i++) {
  obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  if(freq < obj[nums[i]]) {
    freq = obj[nums[i]];
    mode = nums[i];
  }
};
return mode;

/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */


 const meanMedianMode = (arr) => {
   let obj = {};
   let mean=0;
   let median=0;
   let mode=0;

  // Mean 
   arr.forEach((element)=>{
     mean+=element;
   });
  mean/=arr.length;
  
  // Median
  let dataSorted = arr.sort();
  let number =Math.round(Math.floor(dataSorted.length/2));
  median=dataSorted[number];

  // Mode

let numMapping = {};
    for(let i = 0; i < arr.length; i++){
        if(numMapping[arr[i]] === undefined){
            numMapping[arr[i]] = 0;
        }        
            numMapping[arr[i]] += 1;
    }

let greatestFreq = 0;

    for(var prop in numMapping){
        if(numMapping[prop] > greatestFreq){
            greatestFreq = numMapping[prop];
            mode = prop;
        }
    }
  mode=Number(parseInt(mode));

   obj = {
      "mean": mean,
      "median": median,
      "mode": mode,
  };

   return obj ;
};


const data = [1, 1, 1, 2, 2, 3, 4, 5, 5];


console.log(meanMedianMode(data));
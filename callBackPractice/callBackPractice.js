/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
*/


// Write a function called firstItem that passes the first item of the given array to the callback function

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

const firstItem = (foods, firstItem) => {
	firstItem = foods[0];
  console.log(`The first item is ${firstItem}.`);
};

const test1 = firstItem(foods);


// Write a function called getLength that passes the length of the array into the callback

const getLength = (foods, length) => {
  length = foods.length;
  console.log(`The length of the array is ${length}.`);
};

const test2 = getLength(foods);

// Write a function called last which passes the last item of the array into the callback

const last = (foods, lastItem) => {
  lastItem = foods[foods.length-1];
  console.log(`The last item in the array is ${lastItem}.`);
};

const test3 = last(foods);

// Write a function called sumNums that adds two numbers and passes the result to the callback

const sumNums = (value1, value2, sum) => {
	sum = value1 + value2;
  console.log(`The sum is ${sum}.`);
};

const test4 = sumNums(5, 10);


// Write a function called multiplyNums that adds two numbers and passes the result to the callback

const multiplyNums = (value1, value2, product) => {
  product = value1 * value2;
  console.log(`The product is ${product}.`);
};

const test5 = multiplyNums(5, 10);

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

const contains = (foods, item, result) => {
  
  result = 0;
  for (let i = 0; i < foods.length; i++){
  	if (foods[i] === item) {
  		result = 1;
  	}

  }
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
};

const test6 = contains(foods, 'ribeye');

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

const removeDuplicates = (foods, uniqueFoods) => {

  console.log(`foods with duplicates removed: ${uniqueFoods}`);
};

const test7 = removeDuplicates(foods);

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

/*
forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});

*/
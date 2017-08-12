/*
function recursivelyIterateProperties(jsonObject) {
    for (var prop in Object.keys(jsonObject)) {
        console.log(prop);
        if (!(typeof(jsonObject[prop]) === 'string')
            && !(jsonObject[prop] instanceof Array)) {
                recursivelyIterateProperties(jsonObject[prop]);
              console.log('found string');
            }
     }
}

*/

function recursivelyIterateProperties(jsonObject) {
    for (var prop in Object.keys(jsonObject)) {
        console.log(prop, Object.keys(jsonObject)); 
        }
}        

const obj = {
	vance : 'v_vance',
	von : 'v_von',
	childen : 'v_ysa',
	age : 23,
	number : 443434

};

/*
console.log(obj);
console.log(obj.vance);
console.log(obj.von);
console.log(obj.childen);
*/
//console.log(recursivelyIterateProperties(obj));
console.log(Object.keys(obj));

//const enterTheDragon = Object.keys(obj);
//const dragon = typeOf obj[enterTheDragon[1]];
//console.log(enterTheDragon);
console.log(Object.values(obj));

/*
for (let i = 0; i < enterTheDragon.length; i++) {
	console.log(typeof enterTheDragon[i]);
}
*/


// Check For loops and For Each Loop
/*
let arr = [1, 2, 3, 4, 5, 6];


const multiplyBy5 = (element) => {
   return element * 5;
};


const nArr = arr.map(multiplyBy5);


// print it out
//Regular loop
for (let i=0; i < nArr.length; i++) {
   console.log(nArr[i]);
}

// Regular loop
let sum1;

/*
nArr.forEach((Arr) => {
	console.log(Arr);
	sum1 += Arr;
});
*/

/*
arr.forEach((Arr) => {
	console.log(Arr);
	sum1 += Arr;
});

console.log(sum1);
*/



/*
const fun = (arr, cb) => {
	return arr.map(cb);
};

console.log(fun(arr, multiplyBy5));
*/



/*
const foods = ['tray', 'tray', 'pot', 'top'];

const removeDuplicates = (arr, cb) => {
   const UniqueValuesSet = {};
   const uniqueArray = [];

   arr.forEach((item, i) => {
      UniqueValuesSet[item] = typeof arr[i];
   });
   
   Object.keys(UniqueValuesSet).forEach(key => {
   		uniqueArray.push(key);
   });
   cb(uniqueArray);
};

removeDuplicates(foods, (uniqueFoods) => {
   console.log(`foods with duplicates removed: ${uniqueFoods}`);
});

*/






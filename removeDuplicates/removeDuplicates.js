/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
   let newHash = {};
 
    for(let i=0; i< arr.length; i++){ //Loop over all characters of the string
        if (newHash[arr[i]] != null){ 
            newHash[arr[i]] = 1; 
        } else {
            newHash[arr[i]] = 0;
        }
    }
    
	return Object.keys(newHash) ;
};

const data = [1, 1, 1, 2, 2, 3, 4, 5, 5];


console.log(removeDuplicates(data));
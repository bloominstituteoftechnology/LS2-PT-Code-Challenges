/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
     var newHash = {};  //Create a new hash/table
    for(let i=0; i< str.length; i++){ //Loop over all characters of the string
        if (newHash[str[i]] != null){ 
            newHash[str[i]] = 1; 
            return false;
        } else {
            newHash[str[i]] = 0;
        }
    }
    return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false

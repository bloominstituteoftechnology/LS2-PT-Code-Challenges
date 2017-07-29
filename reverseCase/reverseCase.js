/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
    // const arr = str.split('');
    // let resultStr = '';
    // arr.map((letter) =>
    //     letter === letter.toUpperCase() ? resultStr += letter.toLowerCase() :
    //     resultStr += letter.toUpperCase()).join('');
    // console.log(arr);
    // return resultStr;

    let resultString = '';
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        letter === letter.toUpperCase() ? resultString += letter.toLowerCase() :
            resultString += letter.toUpperCase();
    }
    return resultString;
};

console.log(reverseCase('Hello World') === 'hELLO wORLD'); // true
console.log(reverseCase('How Are You Today') === 'hOW aRE yOU tODAY'); // true
console.log(reverseCase('AAAAAAAAh') === 'aaaaaaaaH'); // true
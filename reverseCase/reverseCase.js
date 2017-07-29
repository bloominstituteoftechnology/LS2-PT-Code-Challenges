/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
 const reverseCase = (data) => {
 const workingArr =[];
    data.forEach((element) => {
          if (element !== element.toUpperCase()) {
            workingArr.push(element.toUpperCase());
        } else {
        workingArr.push(element.toLowerCase());
        }

    }); 
    return workingArr;

};

const test = reverseCase(['a','B','c','D']);
console.log(test);
/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
 const reverseCase = (data) => {
    data.map((element) => {
          if (element !== element.toUpperCase()) {
            element.toUpperCase();
        } else {
            element.toLowerCase();
        }
    }); 
    return data;
};

const test = reverseCase(['a','B','c','D']);
console.log(test);
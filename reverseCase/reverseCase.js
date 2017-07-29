const reverseCase = (str) => {
    let output = '';
    for ( let i = 0, len = str.length-1; i <= len; i++ ) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            output += str.charAt(i).toLowerCase();
        } else if (str.charAt(i) === str.charAt(i).toLowerCase()) {
            output += str.charAt(i).toUpperCase();
        } else {
            output += str[i];
        }
    }
    return output;
};

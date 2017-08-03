/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
    return arr.reduce(function(a, current) {
        if (a.indexOf(current) < 0) {
            a.push(current);
        }
        return a;
    }, []);
 }

 console.log(removeDuplicates(array));

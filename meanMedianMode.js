/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */
<<<<<<< HEAD

const arr = [5, 5, 5, 5, 10]

const mean = (arr) => {
    let value = 0
    for(let i = 0; i < arr.length; i++) {
        value += arr[i];
    }
    return value / arr.length;
}()

const median = (arr) => {
    let middle = Math.ceil(arr.length / 2)
    return arr[middle];
}()

const mode = (arr) => {
    let value = 0
    for(let i = 0; i < arr.length; i++) {
        value += arr[i];
    }
    return value / arr.length;
}()
=======
>>>>>>> upstream/master

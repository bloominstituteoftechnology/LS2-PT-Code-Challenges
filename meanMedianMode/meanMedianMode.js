/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

 // Mean: Add all together, divide by number of numbers.
 const mean = nums => {
    let runningTotal = 0;
    nums.forEach((num) => {
        runningTotal += num;
    });
    const mean = runningTotal / nums.length;
    return mean.toFixed(1);
 };

// Median: The middle value of a list of sorted numbers. If even, find what's half-way between both of them (add together, divide by 2).
const median = nums => {
    // Assuming nums is sorted.
    if (nums.length % 2 === 0) { // If even
        const lowMid = nums[Math.floor((nums.length - 1) / 2)];
        const highMid = nums[Math.ceil((nums.length - 1) / 2)];
        const median = (lowMid + highMid) / 2;
        return median;
    } else {
        const median = Math.floor(nums.length / 2) + 1;
        return median;
    }
};


// Mode: The number which appears most often in a set of numbers.
const mode = nums => {
    const counter = {};
    let biggestCount = 0;
    nums.forEach((num) => {
        if (counter[num]) {
            counter[num] += 1;
        } else {
            counter[num] = 1;
        }
    });

    const keysArr = Object.keys(counter);
    let median = 0;
    for (let i = 0; i < keysArr.length; i++) {
        let key = keysArr[i];
        if (counter[key] > biggestCount) {
            biggestCount = counter[key];
            median = key;
        }
    }
    return median;

};

const meanMedianMode = (nums) => {
    const obj = {
        mean: mean(nums),
        median: median(nums),
        mode: mode(nums)
    };
    return obj;
};

console.log(meanMedianMode([1, 2, 4, 5, 6, 7, 8, 9, 10, 15, 15]));
//*--------------------------------
//* Coding Challenge
//*--------------------------------

//? Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

//todo In math, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection of numbers.

//? Constraints:
//? The input array may contain positive and negative integers.
//? The input array may be empty. If it is empty, the function should return 0.

const calculateMean = (arr) => {
    if(Array.isArray(arr) === false){
        throw new TypeError(`${arr} is not an array !! Give a valid array.`);
    }

    const len = arr.length;
    if(len === 0)return 0;

    const total = arr.reduce((acc, curVal) => acc + curVal, 0);

    const avg = Math.round((total / len) * 100) / 100;
    return avg;
};


console.log(calculateMean([1, 2, 3, 4, 5])); // Output: 3
console.log(calculateMean([10, 20, 30])); // Output: 20
console.log(calculateMean([-1, 0, 1])); // Output: 0
console.log(calculateMean([])); // Output: 0
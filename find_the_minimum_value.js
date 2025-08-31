//*---------------------------------------------------------
//* Coding Challenge: Find the Minimum Value in an Array
//*---------------------------------------------------------
//? 16: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

const findMinimum = (arr) => {
    if(arr.length > 0){
        let min = Infinity;
        arr.forEach(num => {
            min = num < min ? num : min;
        });

        return min;
    }
    return false;
}


console.log(findMinimum([55, 44, 1, 55, -78]));
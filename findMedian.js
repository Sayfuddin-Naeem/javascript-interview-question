//*---------------------------
//* Coding Challenge
//*---------------------------

//? Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

//? For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6.

const findMedian = (arr) => {
    if(Array.isArray(arr) === false){
        throw new TypeError(`${arr} is not a valid array !! Give a valid array.`);
    }

    arr.sort((a, b) => a - b);

    const len = arr.length;
    let midIdx = parseInt(len / 2);

    return (len % 2 === 1) ? arr[midIdx] : (arr[midIdx] + arr[midIdx-1]) / 2;
};

console.log(findMedian([1, 5, 8, 5, 22]));

console.log(findMedian([5, 3, 9, 1, 7])); 
console.log(findMedian([2, 4, 6, 8])); 
console.log(findMedian([1, 3, 5, 7, 9, 11]));
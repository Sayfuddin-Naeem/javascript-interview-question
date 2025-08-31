//*---------------------------------------------------------
//*  Interview Question:
//*---------------------------------------------------------

//? 15: Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

const sumOfSquare = (arr) => {
    return arr.reduce((acc, num) => acc + num * num, 0);
};

console.log(sumOfSquare([1, 2, 3]));
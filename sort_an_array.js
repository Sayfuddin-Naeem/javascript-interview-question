//*-------------------------------------------
//*  Programming Question: Sort an Array
//*-------------------------------------------

// ? Write a function to sort an array of numbers in an ascending order.

const sortArrAscending = (arr) => {
    return arr.sort((a,b) => a - b);
};


console.log(sortArrAscending([55, 7, 8, 11, 99]));
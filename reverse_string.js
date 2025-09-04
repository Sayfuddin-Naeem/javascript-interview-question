//*--------------------------------
//* Coding Challenge
//*--------------------------------

//?20. Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

const reverse_str = (str) => {
    if(typeof str !== 'string'){
        throw new TypeError('This is not an string!! Give a valid string.');
    }

    let rev_str = "";
    for(let i = 0; i < str.length; i++){
        rev_str = str[i] + rev_str;
    }
    return rev_str;
};

console.log(reverse_str("NusRat"));
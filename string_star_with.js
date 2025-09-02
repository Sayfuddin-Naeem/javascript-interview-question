//*--------------------------------
//* Coding Challenge
//*--------------------------------
//?19: Write a function to check if a given string starts with a specific substring.

// Input:

//? str: A string (e.g., "Hello world").
//? subStr: A substring to check if it starts the given string (e.g., "Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.

const startWith = (str, subStr) => {

    // const indx =  str.toLowerCase().indexOf(subStr.toLowerCase());

    // return (indx === 0);

    return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
};

console.log(startWith("Hello world!", "world"));
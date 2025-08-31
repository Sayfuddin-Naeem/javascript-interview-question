//*---------------------------------------------------------
//*  Interview Question: Count Occurrences of Character
//*---------------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

const countCharFrequency = (str, char) => {
    let count = 0;
    str = str.toLowerCase();
    char = char.toLowerCase();

    for(const curChar of str) {
        if(curChar === char)
            count++;
    }

    return count;
};

console.log(countCharFrequency('dfadkfll aaadfdeqq', 'a'));
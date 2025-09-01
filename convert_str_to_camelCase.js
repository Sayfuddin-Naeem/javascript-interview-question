//*--------------------------------
//* Coding Challenge
//*--------------------------------
//? 18: Write a function to convert a string to camelCase & snake_case.

const strToCamelCase = (str) => {
    str = str.trim().toLowerCase();

    if(!str)return false;

    return str
            .split(' ')
            .map((word, indx) => {
                if(indx > 0){
                    word = word.charAt(0).toUpperCase() + word.slice(1);
                }
                return word;
            })
            .join('');
};


console.log(strToCamelCase('My name is sayfuddin naeem. and you?'));
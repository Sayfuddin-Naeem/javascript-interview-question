//*-------------------------------------------
//*  Programming Question: Hash Tag Generator
//*-------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.

const hashtagGenerator = (str) => {
    if(str.trim().length === 0 || str.length > 280)
        return false;
    
    const words = str
                    .trim()
                    .split(' ')
                    .map(word => {
                        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                     });

    const hashTag = `#${words.join('')}`;

    return hashTag;
};

console.log(hashtagGenerator('I am sayfuddin naeem. i am a programmer'));
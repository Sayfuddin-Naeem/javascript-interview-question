const findLongestWord = (str) => {
    str = str.trim();
    if(!str)
        return false;

    const words = str.split(' ');

    // let indx = 0;
    // for(let i = 0; i < words.length; i++){
    //     if(words[i].length > words[indx].length){
    //         indx = i;
    //     }
    // }
    // return words[indx];

    words.sort((a,b) => b.length - a.length);
    console.log(words);

    return words[0];
};

console.log(findLongestWord('first Sayfuddin Naeem khusbu masumBillah toyobHossen'));
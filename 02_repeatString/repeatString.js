const repeatString = function(text, number) {
    repeatedText="";
    if(number < 0)
        return "ERROR";
    for(i=0; i<number; i++)
        repeatedText += text;
    return repeatedText; 
};

// Do not edit below this line
module.exports = repeatString;

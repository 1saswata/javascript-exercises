const reverseString = function(text) {
    reversedText = "";
    for(i=1; i<=text.length; i++) {
        reversedText += text.at(text.length-i);    
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;

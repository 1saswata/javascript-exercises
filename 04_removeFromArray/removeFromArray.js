const removeFromArray = function(array, ...removeArgs) {
    for(let i=0; i<removeArgs.length; i++) {
        array = array.filter((element) => element !== removeArgs[i]);
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;

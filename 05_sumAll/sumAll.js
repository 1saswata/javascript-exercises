const sumAll = function(start, end) {
    let sum = 0;
    let i, j;
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (start > end) {
        i = end;
        j = start;
    }
    else {
        i = start;
        j = end;
    }
    for(;i <= j; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

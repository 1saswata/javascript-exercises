const fibonacci = function(n) {
    current = 0;
    next = 1;
    n = +n;
    if ( n < 0 )
        return 'OOPS';
    while(n) {
        next = next + current;
        current = next - current;
        n--;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;

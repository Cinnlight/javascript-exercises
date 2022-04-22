const sumAll = function(init, end) {
    let swap;

    if (Array.isArray(init) === true || Array.isArray(end) === true) {
        return "ERROR";
    }
    if (init < 0 || end < 0 || Number.isInteger(init) === false || Number.isInteger(end) === false) {
        return "ERROR";
    }
    if (init > end) {
        swap = init;
        init = end;
        end = swap;
    }
    
    let sum = init;

    for (i = init + 1; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

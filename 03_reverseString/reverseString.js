const reverseString = function(str) {
    let splitString = str.split("");

    splitString = splitString.reverse();

    let joinString = splitString.join("");

    return joinString;
};

// Do not edit below this line
module.exports = reverseString;

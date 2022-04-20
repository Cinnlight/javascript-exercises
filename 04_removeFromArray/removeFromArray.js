// Function that takes an array as its first argument
// Function then removes all following arguments from the array

const removeFromArray = function(array) {
    let filteredArray = array;

for (let i = 1; i < arguments.length; i++) {
    filteredArray = filteredArray.filter(newArray => newArray !== arguments[i]);
}
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

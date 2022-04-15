const repeatString = function(string, num) {
let heyString = '';

for (i = 0; i < num; i++) {
    heyString += string;
  }

  if (num < 0) {
    heyString = "ERROR";
    return heyString;
  } else {
    return heyString;
  }
};

repeatString("hey", -1)

// Do not edit below this line
module.exports = repeatString;

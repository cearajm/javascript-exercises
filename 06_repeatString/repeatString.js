const repeatString = function(string, a) {
    if (a < 0) return "ERROR";
    let repeatedString = '';
    for (i = 0; i < a; i++) {
        repeatedString = repeatedString + string;
    }
    return repeatedString;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;

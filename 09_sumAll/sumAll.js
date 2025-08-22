const sumAll = function(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    let sum = 0;
    for (i = a; i <= b; i++) {
        sum = sum + i;
    }

    for (arg of arguments) {
        if (
            arg < 0 ||
            arg%1 != 0 ||
            typeof arg !== "number"
        ) {
            return "ERROR";
        }
    }
    return sum;
};

let sum = sumAll(1, 4); // returns the sum of 
console.log(sum);
// 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;

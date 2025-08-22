


const fibonacci = function(a) {

    let arr = [0];
    let sum = 0;
    let i = 1;
    if (a < 0) {return "OOPS"};
    while (arr.length <= a) {
        if (arr.length == 1) {
            arr.push(1);
        }
        sum = arr[i] + arr[i-1];
        console.log(sum);
        arr.push(sum);
        i++;
        console.log(arr);
    }
    return arr[a];
};

console.log("array; " + fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;

const removeFromArray = function(...theArgs) {
    let arr = theArgs[0];
    let args = theArgs.slice(1);
    let newArr = [];

    for (let i of arr) {
        if (!args.includes(i)) {
            newArr.push(i);
        }
    }

    return newArr;
};


let blah = removeFromArray([1,2,3,4], 3, 2, 1);
console.log(blah);
// Do not edit below this line
module.exports = removeFromArray;

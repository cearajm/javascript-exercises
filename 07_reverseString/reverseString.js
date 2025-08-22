const reverseString = function(string) {
    // let stringArr = string.split(" ");
    // console.log(stringArr);
    // for (i = 0; i < stringArr.length; i++) {
    //     stringArr[i] = stringArr[i].split("").reverse().join("");
    //     console.log(stringArr);
    // }
    // stringArr = stringArr.reverse().join(" ");
    // return stringArr
    return string.split("").reverse().join("");
};

string = reverseString("yon");

// Do not edit below this line
module.exports = reverseString;

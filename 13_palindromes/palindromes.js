

const palindromes = function (str) {
    
    let cleanStr = str.replace(/[^\w\s]|_/g, "");
    cleanStr = cleanStr.replaceAll(" ", "").toUpperCase();

    let strArray = cleanStr.split("");

    let string = strArray.join("");
    let reversed = strArray.reverse().join("");
    
    console.log(string + " " + reversed);

    return (string === reversed);
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;

const reverseString = function(string) {
    let newArray1 = string.split(" ");
    let newArray2 = newArray1.map(function(word){
        return word.split("").reverse().join("");
    })
    let result = newArray2.reverse().join(" ");
    return result;
};

// Do not edit below this line
module.exports = reverseString;

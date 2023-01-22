const sumAll = function(firstNumber, secondNumber) {
    let total = 0;
    if (firstNumber < 0 || !Number.isInteger(firstNumber) || secondNumber < 0 || !Number.isInteger(secondNumber)){
        return "ERROR"
    }
    else if (firstNumber < secondNumber){
        for (let i = firstNumber; i <= secondNumber; i++){
            total += i;
        }
    }
    else {
        for (let i = secondNumber; i <= firstNumber; i++){
            total += i;
    }}
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;

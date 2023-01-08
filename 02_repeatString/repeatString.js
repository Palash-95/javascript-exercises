const repeatString = function(string, number) {
    let result = string;
    if (number === 0){
        result = "";
    }
    else if(number < 0){
        result = "ERROR"
    }
    else{
        for (let i = 1; i < number; i++){
            result += string;
       }
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;

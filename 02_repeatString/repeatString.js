const repeatString = function(string, num) {

    let stringConcat = [];

    if (num < 0){
        return "ERROR"
    }
    
    for (let i = 0; i < num; i++){
        stringConcat.push(string);
    }
    
    let stringFinal = stringConcat.join("");
    return stringFinal;
};
repeatString("hey", 5);
// Do not edit below this line
module.exports = repeatString;

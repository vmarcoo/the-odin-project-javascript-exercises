const sumAll = function(num1, num2) {

    let array = [];

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }

    if (num2 > num1){ 
        for (let i = num1; i >= num1 && i <= num2; i++){
            array.push(i);
        }
    }

    if (num2 <= num1){
        for (let i = num2; i>= num2 && i <= num1; i++){
            array.push(i);
        }
    }
    const initialValue = 0;
    const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sumWithInitial;
};

// Do not edit below this line
module.exports = sumAll;

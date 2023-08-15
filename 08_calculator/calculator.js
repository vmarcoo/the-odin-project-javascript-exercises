const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	const init = 0;
  return array.reduce((acc, currentValue) => acc + currentValue, init);
};

const multiply = function(array) {
  return array.reduce((acc, currentValue) => acc * currentValue);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a === 0 || a === 1){
    return 1;
  }
  let array = [];
  for (let i = 1; i <= a; i++){
    array.push(i);
  }

  const arrayFac = array.reduce((acc, currentValue) => acc * currentValue);
  return arrayFac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

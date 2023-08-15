const convertToCelsius = function(temp) {
  let conversion = (temp-32)*5/9
  return Number(conversion.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let conversion = (9/5)*temp+32
  return Number(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

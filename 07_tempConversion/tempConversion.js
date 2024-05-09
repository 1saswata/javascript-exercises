const convertToCelsius = function(tempFahr) {
  let tempCel = (tempFahr - 32) * 5/9; 
  return Number.isInteger(tempCel)? tempCel : Number(tempCel.toFixed(1));
};

const convertToFahrenheit = function(tempCel) {
  let tempFahr = tempCel * 9/5 + 32;
  return Number.isInteger(tempFahr)? tempFahr : Number(tempFahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
	let result = 0;
  array.forEach(x=>result+=x);
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(x=>result*=x);
  return result;
};

const power = function(number1, number2) {
	return Math.pow(number1, number2);
};

const factorial = function(number) {
	result = 1;
  for(let i=1; i<=number; i++)
    result *= i;
  return result;
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

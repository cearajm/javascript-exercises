

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let factorial = a;
  if (a == 0) return 1;
  for (let i = a; i > 1; i--) {
    factorial = factorial * (i - 1);
  }
  return factorial;
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

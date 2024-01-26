const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => {
    if (b === 0 || b === '0') {
      return undefined;
    }
    return a / b;
  },
  multiply: (a, b) => a * b,
};

module.exports = calculator;

const calculator = require('./calculator.js');

describe('Calculator', () => {
  test('add', () => {
    const result = calculator.add(1, 2);
    expect(result).toEqual(3);
  });

  test('subtract', () => {
    const result = calculator.subtract(5, 3);
    expect(result).toEqual(2);
  });

  test('divide', () => {
    const result = calculator.divide(10, 2);
    expect(result).toEqual(5);
  });

  test('divide by 0', () => {
    const result = calculator.divide(8, 0);
    expect(result).toBeUndefined();
  });

  test('multiply', () => {
    const result = calculator.multiply(4, 3);
    expect(result).toEqual(12);
  });
});

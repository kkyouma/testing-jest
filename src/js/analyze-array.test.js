const analyzeArray = require('./analyze-array');

describe('analyzeArray', () => {
  test('positive numbers', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toBe({ average: 4, min: 1, max: 8, length: 6 });
  });
  test('negative numbers', () => {
    const result = analyzeArray([-5, -2, -8, -1, -4]);
    expect(result).toBe({ average: -4, min: -8, max: -1, length: 5 });
  });
  test('decimals', () => {
    const result = analyzeArray([2.5, 1.8, 3.2, 4.7, 2.1]);
    expect(result).toBe({ average: 2.66, min: 1.8, max: 4.7, length: 5 });
  });
  test('empty', () => {
    const result = analyzeArray([]);
    expect(result).toBe({
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    });
  });
  test('just one element', () => {
    const result = analyzeArray([10]);
    expect(result).toBe({ average: 10, min: 10, max: 10, length: 1 });
  });
});

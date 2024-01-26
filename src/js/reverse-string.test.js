const reverseString = require('./reverse-string.js');

describe('Reverse string', () => {
  test('basic case', () => {
    const result = reverseString('string');

    expect(result).toBe('gnirts');
  });
  test('empty string', () => {
    const result = reverseString('');

    expect(result).toBe('');
  });
  test('spaced string', () => {
    const result = reverseString('spaced string');

    expect(result).toBe('gnirts decaps');
  });
  test('special characters', () => {
    const result = reverseString('#string.');

    expect(result).toBe('.gnirts#');
  });
});

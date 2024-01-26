const { capitalize } = require('./capitalize.js');

describe('Capitalize', () => {
  test('a normal string', () => {
    const result = capitalize('string');

    expect(result).toBe('String');
  });
  test('a string with spaces', () => {
    const result = capitalize('multiple string sentence');

    expect(result).toBe('Multiple string sentence');
  });
});

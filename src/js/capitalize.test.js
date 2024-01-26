const { capitalize } = require('./capitalize.js');

describe('Capitalize', () => {
  test('normal string', () => {
    const result = capitalize('string');

    expect(result).toBe('String');
  });
  test('string with spaces', () => {
    const result = capitalize('multiple string sentence');

    expect(result).toBe('Multiple string sentence');
  });
  test('numbers', () => {
    const result = capitalize(123456);

    expect(result).toBeUndefined();
  });
  test('empty string', () => {
    const result = capitalize('');

    expect(result).toBe('');
  });
  test('start with spaces', () => {
    const result = capitalize(' hello');

    expect(result).toBe(' Hello');
  });
  test('with special characters at the start', () => {
    const result = capitalize('@hello');

    expect(result).toBe('@Hello');
  });
});

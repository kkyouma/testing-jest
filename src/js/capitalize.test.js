const { capitalize } = require('./capitalize.js');

test('Capitalize in normal string', () => {
  const result = capitalize('string');

  expect(result).toBe('String');
});

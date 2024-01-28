const caesarCipher = require('./caesar-cipher.js');

describe('caesarCipher', () => {
  test('alphabet - shift: 1', () => {
    const result = caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    expect(result).toBe('BCDEFGHIJKLMNOPQRSTUVWXYZA');
  });
  test('alphabet - shift: 3', () => {
    const result = caesarCipher('abcdefghijklmnopqrstuvwxyz', 3);

    expect(result).toBe('DEFGHIJKLMNOPQRSTUVWXYZABC');
  });
  test('numbers', () => {
    const result = caesarCipher('1234567890', 2);
    expect(result).toBe('1234567890');
  });
  test('symbols', () => {
    const result = caesarCipher('!@#$%^&*()-_+=', 4);
    expect(result).toBe('!@#$%^&*()-_+=');
  });
  test('UpperCase', () => {
    const result = caesarCipher('Hello World!', 5);
    expect(result).toBe('MJQQT BTWQI!');
  });
  test('Spaces and symbols should remain unchanged', () => {
    const result = caesarCipher(
      'Spaces and symbols should remain unchanged.',
      7,
    );
    expect(result).toBe('ZWHJLZ HUK ZFTIVSZ ZOVBSK YLTHPU BUJOHUNLK.');
  });
});

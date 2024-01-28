const caesarCipher = function (string, shift = 1) {
  const lowerCase = string.toLowerCase();
  const plainTextAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';
  for (let i = 0; i < lowerCase.length; i++) {
    const character = lowerCase.charAt(i);

    if (character === ' ') {
      newString += ' ';
      continue;
    }

    const currentIndex = plainTextAlphabet.indexOf(character);
    if (currentIndex !== -1) {
      let newIndex = (currentIndex + shift) % 26;

      if (newIndex < 0) {
        newIndex = 26 + newIndex;
      }
      const encryptedCharacter = plainTextAlphabet.charAt(newIndex);

      newString += encryptedCharacter.toUpperCase();
    } else {
      newString += character;
    }
  }
  return newString;
};

console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz'));

module.exports = caesarCipher;

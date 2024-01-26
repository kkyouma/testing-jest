const reverseString = function (input) {
  if (typeof input !== 'string') {
    return input;
  }
  let result = '';
  for (let i = 0; i <= input.length; i++) {
    const element = input.charAt(input.length - i);
    result = result.concat(element);
  }
  return result;
};

reverseString('string');

module.exports = reverseString;

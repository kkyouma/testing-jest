function capitalize(input) {
  if (typeof input !== 'string') {
    return undefined;
  }

  const firstLetter = input.match(/[a-zA-ZÀ-ÖØ-öø-ÿ]/);
  const index = firstLetter ? firstLetter.index : 0;
  const result =
    input.substring(0, index) +
    input.charAt(index).toUpperCase() +
    input.slice(index + 1);

  return result;
}

module.exports = capitalize;

const analyzeArray = function (arr) {
  if (arr.length === 0) {
    return { average: NaN, length: 0, min: undefined, max: undefined };
  }

  let sum = 0;
  let max = arr[0];
  let min = arr[0];

  arr.forEach(num => {
    max = Math.max(num, max);
    min = Math.min(num, min);

    sum += num;
    return { max, min };
  });

  const average = sum / arr.length;

  return { average, min, max, length: arr.length };
};

module.exports = analyzeArray;

const eqArrays = function(firstArray, secondArray) {
  let output = true;
  if (firstArray.length !== secondArray.length) {
    output = output && false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (Array.isArray(firstArray[i]) && Array.isArray(secondArray[i]) && !eqArrays(firstArray[i], secondArray[i])) {
        output = output && false;
      } else if ((!Array.isArray(firstArray[i]) || !Array.isArray(secondArray[i])) && firstArray[i] !== secondArray[i]) {
        output = output && false;
      }
    }
  }
  return output;
};

module.exports = eqArrays;


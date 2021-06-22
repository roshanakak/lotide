const eqArrays = function(firstArray, secondArray) {
  let output = true;
  if (firstArray.length !== secondArray.length) {
    output = output && false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        output = output && false;
      }
    }
  }
  return output;
};

const assertArraysEqual = function(firstArray, secondArray) {
  const Pass = String.fromCodePoint(0x1F601);
  const Fail = String.fromCodePoint(0x1F614);
  if (eqArrays(firstArray, secondArray)) {
    console.log(`${Pass} Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`${Fail} Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const without = function(source , itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      output.push(source[i]);
    }
  }
  return output;
};


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



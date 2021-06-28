const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  const Pass = String.fromCodePoint(0x1F601);
  const Fail = String.fromCodePoint(0x1F614);
  if (eqArrays(firstArray, secondArray)) {
    console.log(`${Pass} Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`${Fail} Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

module.exports = assertArraysEqual;

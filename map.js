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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
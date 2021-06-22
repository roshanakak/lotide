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

const flatten = function(elements) {
  let output = [];
  for (let element of elements) {
    if (Array.isArray(element)) {
      for (let elm of element) {
        output.push(elm);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

//console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
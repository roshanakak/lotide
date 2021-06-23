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

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s/g, "");
  let chars = sentence.slice('');

  for (let i = 0; i < chars.length; i++) {
    if (results[chars[i]]) {
      results[chars[i]].push(i);
    } else {
      results[chars[i]] = [];
      results[chars[i]].push(i);
    }
  }

  return results;
};

console.log(assertArraysEqual(letterPositions("hello").l, [2,3]));
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
const assertArraysEqual = require('./assertArraysEqual');

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
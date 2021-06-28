const assertArraysEqual = require('./assertArraysEqual');

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



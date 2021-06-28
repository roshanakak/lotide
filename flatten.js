const assertArraysEqual = require('./assertArraysEqual');


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
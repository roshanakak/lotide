const assertEqual = function(actual, expected) {
  const Pass = String.fromCodePoint(0x1F601);
  const Fail = String.fromCodePoint(0x1F614);
  if (actual === expected) {
    console.log(`${Pass}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${Fail}Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function(arr) {
  return arr[0];
};

assertEqual(head([5]), 5);
assertEqual(head([]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
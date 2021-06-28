const assertEqual = function(actual, expected) {
  const Pass = String.fromCodePoint(0x1F601);
  const Fail = String.fromCodePoint(0x1F614);
  if (actual === expected) {
    console.log(`${Pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${Fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

const assertEqual = function(actual, expected) {
  const Pass = String.fromCodePoint(0x1F601);
  const Fail = String.fromCodePoint(0x1F614);
  if (actual === expected) {
    console.log(`${Pass}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${Fail}Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKeyByValue = function(obj, val) {
  const results = {};

  for (let item in obj) {
    if (obj[item] === val) return item;
  }

  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
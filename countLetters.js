const assertEqual = function(actual, expected) {
  const Pass = String.fromCodePoint(0x1F601);
  const Fail = String.fromCodePoint(0x1F614);
  if (actual === expected) {
    console.log(`${Pass}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${Fail}Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s/g, "");
  let chars = sentence.slice('');

  for (const char of chars) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results;
};

console.log(countLetters('lighthouse in the house'));
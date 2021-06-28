const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, val) {
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
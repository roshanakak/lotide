const assertEqual = function(actual, expected) {
  const Pass = String.fromCodePoint(0x1F601);
  const Fail = String.fromCodePoint(0x1F614);
  if (actual === expected) {
    console.log(`${Pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${Fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (object1[key] !== object2[key]) return false;
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false));
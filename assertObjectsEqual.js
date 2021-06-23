const assertEqual = function(actual, expected) {
  const Pass = String.fromCodePoint(0x1F601);
  const Fail = String.fromCodePoint(0x1F614);
  if (actual === expected) {
    console.log(`${Pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${Fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) return false;
    if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) return false;
  }

  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  const Pass = String.fromCodePoint(0x1F601);
  const Fail = String.fromCodePoint(0x1F614);
  if (eqObjects(object1, object2)) {
    console.log(`${Pass} Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`${Fail} Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2));
const eqObjects = function(object1, object2) {
  let returnValue = true;
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;
  
  for (const key of Object.keys(object1)) {
    if (typeof object1[key] === 'object') returnValue = returnValue && eqObjects(object1[key], object2[key]);
    else {
      if (object2[key] !== object1[key])
        returnValue = returnValue && false;
    }
  }
  return returnValue;
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertEqual(eqObjects(ab, ba), true));

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEqual(eqObjects(ab, abc), false));

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(assertEqual(eqObjects(cd, dc), true));

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertEqual(eqObjects(cd, cd2), false));

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

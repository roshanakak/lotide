const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;;
  } else {
    return false;  
  }
};


const eqArrays = function(firstArray, secondArray) {
  let output = true;
  if (!assertEqual(firstArray.length, secondArray.length)) {
    output = output && false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (!assertEqual(firstArray[i], secondArray[i])) {
        output = output && false;
      }
    }
  }
  if (output) {
    console.log('The two arrays are equal');
  } else {
    console.log('The two arrays are not equal');
  }
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
 eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
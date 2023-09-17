const eqArrays = function (arrayActual, arrayExpected) {
  let setOne = arrayActual
  let setTwo = arrayExpected
  if (setOne.length > setTwo.length || setTwo.length > setOne) {
    return false
  }
  for (let i = 0; i < arrayActual.length; i++) {


    if (setTwo[i] !== setOne[i]) {
      return false
    }


    return true
  }
};


const assertArraysEqual = function (arrayActual, arrayExpected) {

  if (eqArrays(arrayActual, arrayExpected)) {
    console.log(`✅✅✅ Assertion Passed:${arrayActual} === ${arrayExpected}`);

  }
  else {
    console.log(`🟥🟥🟥 Assertion Failed:${arrayActual} !== ${arrayExpected}`);
  }
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]))

const eqArrays = require('./eqArrays');


const assertArraysEqual = function (arrayActual, arrayExpected) {

  if (eqArrays(arrayActual, arrayExpected)) {
    console.log(`✅✅✅ Assertion Passed:${arrayActual} === ${arrayExpected}`);

  }
  else {
    console.log(`🟥🟥🟥 Assertion Failed:${arrayActual} !== ${arrayExpected}`);
  }
};


module.exports = assertArraysEqual;
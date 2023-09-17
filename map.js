const eqArrays = function (arrayOne, arrayTwo) {
  let setOne = arrayOne
  let setTwo = arrayTwo
  if (arrayOne.length == 0 && arrayTwo.length == 0){
    return true
  }
  if (setOne.length > setTwo.length || setTwo.length > setOne) {
    return false
  }
  for (let i = 0; i < arrayOne.length; i++) {


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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
  
// long string test
let words = ["ground", "control", "to", "major", "tom"];
let results = map(words, word => word[0]);
assertArraysEqual(results, ['g', 'c', 't', 'm', 't'])

//empty test
words = []
results = map(words, word => word[0]);
assertArraysEqual(results, [])


// numbers test
words = [1,2,3,4,5]
results = map(words, num => num*2);
assertArraysEqual(results, [2,4,6,8,10])


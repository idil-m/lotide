const assertArraysEqual = function (arrayOne, arrayTwo) {

  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed:${arrayOne} === ${arrayTwo}`);

  }
  else {
    console.log(`🟥🟥🟥 Assertion Failed:${arrayOne} !== ${arrayTwo}`);
  }
};

const eqArrays = function (arrayOne, arrayTwo) {
  let setOne = arrayOne
  let setTwo = arrayTwo
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








const letterPositions = function (sentence) {
  const results = {}
  for (i = 0; sentence.length < i; i++) {
    const letter = sentence[i]
    if (results[letter]) {
      results[letter].push(i)
    } else {
      results[letter] = [i]
    }
  }
  return results
}



console.log(letterPositions("hello"))


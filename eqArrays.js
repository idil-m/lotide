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

module.exports = eqArrays;
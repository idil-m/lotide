const eqArrays = function(arrayOne, arrayTwo) {
  let setOne = arrayOne;
  let setTwo = arrayTwo;
  
  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true;
  }
  if (setOne.length !== setTwo.length) {
    return false;
  }
  for (let i = 0; i < setOne.length; i++) {
    if (setTwo[i] !== setOne[i]) {
      return false;
    }
  }

  return true;
  
};

module.exports = eqArrays;
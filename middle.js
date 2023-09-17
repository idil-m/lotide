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


const assertArraysEqual = function (arrayOne, arrayTwo) {

  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed:${arrayOne} === ${arrayTwo}`);

  }
  else {
    console.log(`🟥🟥🟥 Assertion Failed:${arrayOne} !== ${arrayTwo}`);
  }
};


//no middle cases
assertArraysEqual(middle([]),[])
assertArraysEqual(middle([1]),[])
assertArraysEqual(middle([1,2]),[])

//odd
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])


//even
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
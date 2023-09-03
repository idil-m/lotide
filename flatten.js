const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);

  }
  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed:${actual} !== ${expected}`);
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

const flatten = function (arr1) {
  rightArray = []
  for (i = 0; arr1.length; i++) {
    let item = arr1[i]
    if (Array.isArray(item)) {
      for (j = 0; item.length; j++) {
        subItem = item[j]
        rightArray.push(subItem)
      }
    } else {
      rightArray.push(item)
    }
  }
  return rightArray
}
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

const without = function (source, itemsToRemove) {
  let fullSetArray = source.slice();
  for (i = 0; fullSetArray.length; i++) {
    const item = fullSetArray[i]
    if (itemsToRemove.includes(item)) {
      console.log("remove ", item)
      fullSetArray.splice(i, 1)
    }
  }
  return fullSetArray
}
console.log(without([1, 2, 3], [1, 2]))





// TEST: DO NOT MODIFY ORGINAL ARRAY
//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);



const eqArrays = function (arrayOne, arrayTwo) {
  let setOne = arrayOne;
  let setTwo = arrayTwo;
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

const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);

  }
  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed:${actual} !== ${expected}`);
  }
};



const eqObjects = function (object1, object2) {
  const keyArr1 = Object.keys(object1)
  const keyArr2 = Object.keys(object2)
  if (keyArr1.length !== keyArr2.length) {
    return false
  }

  for (const key of keyArr1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    }

    else {
      if (object1[key] !== object2[key]) {
        return false
      }
    }
  }

  return true
};



















const shirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), false);

const longSleeveShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


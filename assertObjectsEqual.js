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

const assertObjectsEqual = function (object1, object2, expected) {
  const inspect = require('util').inspect;
  let actual = eqObjects(object1, object2)
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} ${[object1]} === ${[object2]}`);
  }

  else {
    console.log(`🟥🟥🟥 Assertion Failed: ${inspect(actual)} ${[object1]} !== ${[object2]}`);

  }




};


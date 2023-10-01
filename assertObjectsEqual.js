const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(object1, object2, expected) {
  const inspect = require('util').inspect;
  let actual = eqObjects(object1, object2);
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} ${[object1]} === ${[object2]}`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${inspect(actual)} ${[object1]} !== ${[object2]}`);

  }




};

module.exports = assertObjectsEqual;

const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);

  }
  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed:${actual} !== ${expected}`);
  }
};



const findKeyByValue = function (object, value) {
  for (key in object) {
    const currValue = object[key]

    if (value === currValue) {
      return key
    }
  }

}



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"),);
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
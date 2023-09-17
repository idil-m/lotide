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


const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const testCallback = function (x){ // {stars: number}
  return  x.stars === 72
} 


const findKey= function (object, callback){
  for (key in object) {
    const currValue = object[key]
    if (callback(currValue)){
      return key
    }     
  }
}


console.log(findKey(testObject, testCallback)) // => "noma"










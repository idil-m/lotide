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

const takeUntil = function(array, callback) {
  
  for(let i = 0; i < array.length; i++){
    if(callback(array[i])){
      return array.slice(0,i)
    } 
  }
}





const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];//[ 1, 2, 5, 7, 2 ]
const results1 = takeUntil(data1, test);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);

function test(x){
  return x < 0
}
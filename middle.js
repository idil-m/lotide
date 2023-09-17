const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



const middle = function (array) {
  // no middle
  if( array.length <= 2){
    return []
  } 
  // even
  if ( array.length  % 2 === 0){
    midIndex1 = Math.floor(array.length/2)
    midIndex2 = midIndex1 -1
    let value1 = array[midIndex1]
    let value2  = array[midIndex2]
    return [value2, value1]
  } 
  //odd
  else if ( array.length  % 2 !== 0){
    midIndex = Math.floor(array.length/2)
    return [array[midIndex]]
  }
};

module.exports = middle;
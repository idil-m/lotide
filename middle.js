const middle = function(array) {
  // no middle
  if (array.length <= 2) {
    return [];
  }
  // even
  if (array.length  % 2 === 0) {
    let midIndex1 = Math.floor(array.length / 2);
    let midIndex2 = midIndex1 - 1;
    let value1 = array[midIndex1];
    let value2  = array[midIndex2];
    return [value2, value1];
  } else if (array.length  % 2 !== 0) {
    let midIndex = Math.floor(array.length / 2);
    return [array[midIndex]];
  }
};

module.exports = middle;
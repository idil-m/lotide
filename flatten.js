const flatten = function(arr1) {
  let rightArray = [];
  for (let i = 0; i< arr1.length; i++) {
    let item = arr1[i];
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        let subItem = item[j];
        rightArray.push(subItem);
      }
    } else {
      rightArray.push(item);
    }
  }
  return rightArray;
};
module.exports = flatten;
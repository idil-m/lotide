const findKeyByValue = function(object, value) {
  for (let key in object) {
    const currValue = object[key];

    if (value === currValue) {
      return key;
    }
  }

};

module.exports = findKeyByValue;
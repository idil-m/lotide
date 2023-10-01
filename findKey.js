const findKey = function(object, callback) {
  for (let key in object) {
    const currValue = object[key];
    if (callback(currValue)) {
      return key;
    }
  }
};

module.exports = findKey;










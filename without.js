const without = function(source, itemsToRemove) {
  let results = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      results.push(element);
    }
  }
  return results;
};

module.exports = without;


const countOnly = function(allItems, itemsToCount) {

  const results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;// if exists update by adding 1
      } else {
        results[item] = 1; //intilize if doesnt exist
      }
    }
  }



  return results;
};

module.exports = countOnly;
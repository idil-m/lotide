const countLetters = function(word) {
  const results = {};

  for (const letter of word) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;







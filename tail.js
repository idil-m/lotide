const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);

  }
  if (actual !== expected) {
    console.log(`🟥🟥🟥 Assertion Failed:${actual} !== ${expected}`);
  }
};



const tail = function (arsr) {
  return arr.slice(1)
}

assertEqual(tail([5, 6, 7]).length, 2)

assertEqual(tail([5, 6, 7])[0], 6)

assertEqual(tail([5, 6, 7])[1], 7)



const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns a length of 2 for [5, 6, 7]", () => {
    assert.strictEqual(tail([5, 6, 7]).length, 2);
 
  });
  it("returns 6 for tail([5, 6, 7])[0]", () => {
    assert.strictEqual(tail([5, 6, 7])[0], 6); 
  });

  it("returns 7 for tail([5, 6, 7])[1]", () => {
  assert.strictEqual(tail([5, 6, 7])[1], 7); 
});
});




//assertEqual(tail([5, 6, 7]).length, 2)

//assertEqual(tail([5, 6, 7])[0], 6)

//assertEqual(tail([5, 6, 7])[1], 7)
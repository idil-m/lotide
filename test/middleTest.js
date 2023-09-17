const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 1 element from odd length array big case", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
 
  });
  it("returns 1 element from odd length array small case", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it("returns empty array for middle(['']", () => {
    assert.deepEqual(middle([]),[]); 
  });
  it("returns 2 element from even length array closest to the middle small case", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
  it("returns 2 element from even length array closest to the middle big case", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("is a single digist odd length array returns an empty array for middle(['']", () => {
    assert.deepEqual(middle([1]),[]); 
  });
  it("is a double digist even length array returns an empty array for middle(['']", () => {
    assert.deepEqual(middle([1,2]),[]); 
  });
});

/*//no middle cases
console.log(middle([]),[])
console.log(middle([1]),[])
console.log(middle([1,2]),[])

//odd
console.log(middle([1, 2, 3]), [2]) "returns 1 element from odd length array small case"
console.log(middle([1, 2, 3, 4, 5]),[3]) "returns 1 element from odd length array big case"


//even
console.log(middle([1, 2, 3, 4]), [2, 3])
console.log(middle([1, 2, 3, 4, 5, 6]), [3, 4])
*/
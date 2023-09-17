const middle = require('../middle');


//no middle cases
console.log(middle([]),[])
console.log(middle([1]),[])
console.log(middle([1,2]),[])

//odd
console.log(middle([1, 2, 3]), [2])
console.log(middle([1, 2, 3, 4, 5]),[3])


//even
console.log(middle([1, 2, 3, 4]), [2, 3])
console.log(middle([1, 2, 3, 4, 5, 6]), [3, 4])
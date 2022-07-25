const groupArrayElements = require('./shared/array-util');

const result = groupArrayElements([1, 2, 3, 4, 5], 3);
console.log(result);

// should return this [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
let reduce = require('./reduce');

function operation(prev, curr, index, arr) {
    return prev + curr;
}

console.log('Test with empty array:', reduce([], operation, 0) === 0, '\t', reduce([], operation, 0));

console.log('Test with small array:', reduce([1, 2, 3], operation, 0) === 6, '\t', reduce([1, 2, 3], operation, 0));
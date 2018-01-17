let reduce = require('./reduce');

function operation(prev, curr, index, arr) {
    return prev + curr;
}


console.log('Test with empty array:',
    reduce([], operation, 0) === 0);

console.log('Test with small array:',
    reduce([2, 4, 6], operation, 8) === 20);

console.log('Test with empty string as initial and empty array:',
    reduce([], operation, '') === '');

console.log('Test with empty string as initial and array of strings:',
    reduce(['e', 'l', 'l', 'o'], operation, 'h') === 'hello');

console.log('Test for array of nulls:',
    reduce([null, null, null], function (prev, curr, index, arr) {
        return prev;
    }, null) === null);
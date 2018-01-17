let compareObjects = function (firstObject, secondObject) {
    return JSON.stringify(firstObject) === JSON.stringify(secondObject);
}

let countWords = require('./countWords');

let submittedUsers = [];
console.log('Test for empty input: ',
    compareObjects(countWords(submittedUsers), {}));

submittedUsers = ['a', 'a', 'b', 'c', 'a', 'd', 'c', 'b'];
console.log('Test for input with strings:',
    compareObjects(countWords(submittedUsers), { 'a': 3, 'b': 2, 'c': 2, 'd': 1 }));

submittedUsers = ['a', 'a', 'a', 'a'];
console.log('Test for inputs with the same value multiple times:',
    compareObjects(countWords(submittedUsers), { 'a': 4 }));
let checkUsersValid = require('./checkUsersValid');

let goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];
let testAllValid = checkUsersValid(goodUsers);


let input1 = [
    { id: 2 },
    { id: 1 }
];
console.log('Test when submitted users are a subset of goodUsers:', testAllValid(input1) === true);

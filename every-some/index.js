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
console.log('Test when submitted users array is a subset of goodUsers:', testAllValid(input1) === true);

let input2 = [
    { id: 2 },
    { id: 1 },
    { id: 7 }
];
console.log('Test when submitted users array is not a subset of goodUsers:', testAllValid(input2) === false);

let loadUsers = require('./load-users');

//Check if the load function is called for all the elements in the array
let loadCount = 0;
let doneCount = 0;
let resultUsers = [];

let load = function (id, callback) {
  loadCount++;
  let user = {
    id
  };
  callback(user, id);
};
let done = (result) => {
  doneCount++;
  resultUsers = result;
};

loadUsers([0, 1, 2, 3, 4], load, done);
console.log('Should call the load method 5 times for an input array containing 5 elements:',
  loadCount === 5);


//Check if the result array contains the right data
loadCount = 0;
doneCount = 0;
resultUsers = [];
loadUsers([0, 1, 2, 3], load, done);
let expectedOutput = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
console.log('The result array should contain the data of the users:',
  JSON.stringify(resultUsers) === JSON.stringify(expectedOutput));

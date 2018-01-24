let loadUsers = require('./load-users');

//Check if the load function is called for all the elements in the array
let loadCount = 0;
let doneCount = 0;

let load = (id) => {
	return new Promise((resolve, reject) => {
		loadCount++;
		resolve(id * 3);
	});
};
let done = (result) => {
	doneCount++;
	return JSON.stringify(result);
};

loadUsers([0, 1, 2, 3, 4], load, done);
console.log('Should call the load method 5 times for an input array containing 5 elements:',
	loadCount === 5);


//Check if the result array contains the right data
loadCount = 0;
doneCount = 0;
let resultUsers = await loadUsers([0, 1, 2, 3], load, done);
let expectedOutput = [0, 3, 6, 9];
console.log('The result array should contain the data of the users:',
	JSON.stringify(resultUsers) === JSON.stringify(expectedOutput));


//Check if when the done method is called, the result array contains all the data
loadCount = 0;
doneCount = 0;
resultUsers = loadUsers([0, 1], load, done);

expectedOutput = [0, 3];
console.log('The done method should be called with the result array:',
	done() === JSON.stringify(expectedOutput));

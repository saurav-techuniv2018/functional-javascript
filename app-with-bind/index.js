let logger = require('./logger');

logger('')();
console.log('Passing namespace as empty string and no arguments should have no output.');

logger('')('');
console.log('Passing both namespace and argument as empty string should have no output.');

logger('LOG:')('Test 3');
console.log('Passing namespace and single argument should prepend namespace to the argument ("LOG: Test 3")');

logger('INFO:')('This', 'is', 'the result = ', { x: 3, y: 4, z: 7 });
console.log('Passing namespace and multiple arguments should prepend namespace to those arguments ("INFO: This is the result = { x: 3, y: 4, z: 7 }")');

logger('')('Only argument.');
console.log('Passing empty argument to namespace and a single argument should print the argument ("Only argument.")');
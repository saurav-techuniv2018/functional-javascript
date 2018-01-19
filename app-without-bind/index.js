let logger = require('./logger');

logger('')('Hello World!')
console.log('Passing namespace as an empty string should print only the message ("Hello World!")');

logger('LOG:')('Done');
console.log('Passing namespace as a string containing alphabets should print the message, prepending the namespace ("LOG: Done")');

logger('WARN:')('This', 'is', 'test', 3);
console.log('Passing multiple arguments with a namespace should print all the arguments prepending the namespace ("WARN: This is test 3")')
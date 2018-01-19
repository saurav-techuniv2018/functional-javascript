let logger = require('./logger');

logger('')();
console.log('Passing namespace as empty string and no arguments should have no output.')

logger('')('');
console.log('Passing both namespace and argument as empty string should have no output.')
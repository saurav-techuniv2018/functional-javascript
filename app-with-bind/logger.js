function logger(namespace) {
    return function () {
        let argsArray = Array.prototype.slice.call(arguments);
        [namespace].concat(argsArray);
        return console.log.bind(console, )
    }
}

module.exports = logger;
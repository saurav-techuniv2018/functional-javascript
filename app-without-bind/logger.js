function logger(namespace) {
    if (namespace === '') { return console.log; }
    else {
        return function () {
            let argsArray = Array.prototype.slice.call(arguments);
            argsArray.unshift(namespace);
            console.log.apply(console, argsArray);
        };
    }
}

module.exports = logger;
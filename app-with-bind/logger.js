function logger(namespace) {
    if (namespace !== '') { return console.log.bind(console, namespace); }
    else { return console.log; }
}

module.exports = logger;
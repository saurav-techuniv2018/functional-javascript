function duckCount() {
    let argumentsAsArray = Array.prototype.slice.call(arguments);
    let filterByPropertyQuack = argumentsAsArray
        .filter(function (p) {
            return Object.prototype.hasOwnProperty.call(p, 'quack');
        });

    let filteredCount = filterByPropertyQuack.length;
    return filteredCount;
}

module.exports = duckCount;
function reduce(inputArray, operation, initial) {
    if (inputArray.length == 0) return initial;

    let currentResult = operation(initial, inputArray[0], 0, inputArray);
    let othersResult = reduce(inputArray.slice(1), operation, currentResult);

    return othersResult;
}

module.exports = reduce;
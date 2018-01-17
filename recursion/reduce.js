function reduce(arr, fn, initial) {
    if (arr.length == 0) return initial;

    let currentResult = fn(initial, arr[0], 0, arr);
    let othersResult = reduce(arr.slice(1), fn, currentResult);

    return othersResult;
}

module.exports = reduce;
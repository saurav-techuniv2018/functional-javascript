function countWords(inputWords) {

    let groupedByCount = inputWords.reduce(function (accumulator, currentWord) {
        if (currentWord in accumulator) { accumulator[currentWord]++; }
        else { accumulator[currentWord] = 1; }

        return accumulator;
    }, {});

    return groupedByCount;
}

module.exports = countWords;
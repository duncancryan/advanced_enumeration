const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    const wordArray = this.word.split('');
    return new Set(wordArray).size === wordArray.length;
}

module.exports = IsogramFinder;

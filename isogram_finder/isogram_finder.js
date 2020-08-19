const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    const wordArrayUncased = this.word.split('');

    const wordArray = wordArrayUncased.map((letter) => {
      return letter.toLowerCase();
    })
    return new Set(wordArray).size === wordArray.length;
}

module.exports = IsogramFinder;

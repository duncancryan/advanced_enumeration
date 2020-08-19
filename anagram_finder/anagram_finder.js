const AnagramFinder = function (word) {
    this.word = word;
    this.wordArray = this.word.split('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    // create sub arrays made up of letters for each word in otherWords array
    const otherWordsSplit = otherWords.map((word) => {
      return word.split('');
    })
    // create empty array to put anagrams in
    const anagrams = [];
    // check wordArray against these sub arrays in turn (loop but could use forEach)
    for (var word of otherWordsSplit) {
      if (word.every((letter) => {
        return this.wordArray.includes(letter)
      }) && word.length === this.wordArray.length) {
        anagrams.push(word.join(''));
      }
    }
    return anagrams;
    // if includes evaluates to true return joined sub array in an array
}



module.exports = AnagramFinder;

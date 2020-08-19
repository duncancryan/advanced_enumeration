const AnagramFinder = function (word) {
    this.word = word;
    this.wordArray = this.word.split('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const otherWordsSplit = otherWords.map((word) => {
      return word.split('');
    })
    
    const anagrams = [];
    
    for (var word of otherWordsSplit) {
      if (word.every((letter) => {
        return this.wordArray.includes(letter)
      }) && word.length === this.wordArray.length ) {
        anagrams.push(word.join(''));
      }
    }
    
    return anagrams;
}



module.exports = AnagramFinder;

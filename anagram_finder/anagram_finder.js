const AnagramFinder = function (word) {
    this.word = word;
    this.sortedWord = this.word.toLowerCase().split('').sort().join('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  anagrams = otherWords.filter((word) => {
    return word.toLowerCase().split('').sort().join('') === this.sortedWord && word !== this.word;
  })
  return anagrams;
  }



// move split into for loop so you can push unsplit word without join
// above is because we need to push the original words with upperCase intact


module.exports = AnagramFinder;

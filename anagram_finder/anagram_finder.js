const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const anagrams = [];

  for (let word in otherWords) {
    console.log(word.split('').sort.join(''));
    }
  }


  return anagrams;
}
// move split into for loop so you can push unsplit word without join
// above is because we need to push the original words with upperCase intact


module.exports = AnagramFinder;

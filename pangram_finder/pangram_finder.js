const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const phraseArrayUncased = this.phrase.split('');
  
  const phraseArrayUnfiltered = phraseArrayUncased.map((letter) => {
   return letter.toLowerCase(); 
  })

  const phraseArray = phraseArrayUnfiltered.filter((letter) => {
    return this.alphabet.includes(letter);
  })
  
  const result = this.alphabet.every((letter) => {
    return phraseArray.includes(letter);
  })
  
  return result;
}

module.exports = PangramFinder;

const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const phraseArrayVanilla = this.phrase.split('');
  const phraseArray = phraseArrayVanilla.map((letter) => {
   return letter.toLowerCase(); 
  })
  const result = this.alphabet.every((letter) => {
    return phraseArray.includes(letter);
  })
  return result;
}

module.exports = PangramFinder;

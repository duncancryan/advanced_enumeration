const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const phraseArray = this.phrase.split('');
  const result = this.alphabet.every((letter) => {
    return phraseArray.includes(letter);
  })
  return result;
}

module.exports = PangramFinder;

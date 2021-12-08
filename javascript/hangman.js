class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    
  }

  pickWord() {
    let rndWord = Math.floor(Math.random()*this.words.length)
    return this.words[rndWord];
  }

  checkIfLetter(keyCode) {
    return keyCode > 64 && keyCode < 91;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    if (this.checkWinner()) { console.log('winner'); }
    if (this.checkWinner()) {
      this.hangmanCanvas.winner();
      this.clearGame();
  }
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
    if (this.checkGameOver()) { console.log('looser'); }
    if (this.checkGameOver()) {
      this.hangmanCanvas.gameOver();
      this.clearGame();
    }
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  console.log(hangman.secretWord);
  if(hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)) {
    let indexes = [];
    if(hangman.secretWord.includes(event.key)) {
      let firstIndex = hangman.secretWord.indexOf(event.key);
      indexes.push(firstIndex);
      if(hangman.secretWord.includes(event.key, firstIndex + 1)) {
        indexes.push(hangman.secretWord.indexOf(event.key, firstIndex + 1));
      }

      console.log(indexes);
      hangmanCanvas.writeCorrectLetter(event.key, indexes);
      hangman.addCorrectLetter(event.key);
    } else {
      hangmanCanvas.writeWrongLetter(event.key, this.errorsLeft);
      hangman.addWrongLetter(event.key);
    }
  }
});

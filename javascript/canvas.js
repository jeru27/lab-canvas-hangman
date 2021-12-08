class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }
  createBoard() {
    img.src = './images/hangman-logo.png';
    this.context.strokeRect(0, 0, 1200, 550);
    this.drawLines();
  }

  drawLines() {
    let x = 500;
    let y = 450;
    let secretLetters = this.secretWord.split('');
    

    for (let i = 0; i < secretLetters.length; i++) {

        
        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x += 30, y);
        this.context.stroke();
        this.context.closePath();

        this.context.clearRect(x += 30, y, 50, 50)

    }
  }

  writeCorrectLetter(index) {
    let i = 510
    if (index > 0) i += (60 * index);
    this.context.fillStyle = "black";
    this.context.font = "30px Arial";
    this.context.fillText(letter, i, 440, 500);
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 800;
        for (let i = 0; i < letters.length; i++) {
            this.context.fillStyle = "black";
            this.context.font = "30px Arial";
            this.context.fillText(letters[i], x += 15, 100, 500) 
            this.drawHangman(errorsLeft);

            this.context.clearRect(x += 15, 100, 50, 50)
        }
  }

  drawHangman(errorsLeft) {
    let lines = this.secretWord.length;
    console.log(lines);
    let startL = 200;
    for (let i = 0; i < lines; i++) {
      this.context.beginPath();
      this.context.moveTo(startL, 500);
      this.context.lineTo(startL + 40, 500);
      this.context.stroke();
      this.context.closePath();
      startL += 60;
    }
  }

  gameOver() {
    let img = new Image();
    that = this;
    img.onload = function () {
      that.ctx.drawImage(img, 150, 100);
    };
    img.src = './images/gameover.png';
  }

  winner() {
    let img = new Image();
    that = this;
    img.onload = function () {
      that.ctx.drawImage(img, 150, 100);
    };
    img.src = './images/awesome.png';
  }
}

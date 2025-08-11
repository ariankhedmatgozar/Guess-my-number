'use strict';

/* System Koli:
     Ye input daryaft mikone
     check mikone aya input ba random barabare if yes -> win else -> ye vahed kam mikone.
     Dokme again ro ke mizanim bayad game reset she va hata on random ham dobare reset she ta hame hads bezana.
*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let highScore = 0;
let score = 20;

// Get number from input and store it
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess !== 'number') {
    document.querySelector('.message').textContent = 'Not a number!';
  }

  if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number';
    if (highScore < score) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else {
    if (guess > randomNumber) {
      document.querySelector('.message').textContent = 'Too High!.';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < randomNumber) {
      document.querySelector('.message').textContent = 'Too Low!.';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // generating random again
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(randomNumber);

  // reseting all messages
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});

'use strict';

const secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNum;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Correct. You won';
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over. You lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over. You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

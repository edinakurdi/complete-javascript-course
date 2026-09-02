'use strict';

let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    //when player wins
  } else if (guess === secretNum) {
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('.message').textContent = 'Correct. You won';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

  // when the guess is incorrect
  else if (guess !== secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNum ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over. You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:


1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)


GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.floor(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

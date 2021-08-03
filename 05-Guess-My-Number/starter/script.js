'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// handling click events (event listener)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const bodyColor = function (colorValue) {
  document.querySelector('body').style.backgroundColor = colorValue;
};

const setScore = function (playerscore) {
  document.querySelector('.score').textContent = playerscore;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setNumberWidth = function (numberWidth) {
  document.querySelector('.number').style.width = numberWidth;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no number
  if (!guess) {
    displayMessage('⛔ No Number Entered!');

    //when guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 correct number!');

    setNumber(secretNumber);

    bodyColor('#60b347');

    setNumberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '🚀 The number is too high!'
          : '🔻 The number is too low'
      );
      score--;
      setScore(score);
    } else {
      displayMessage('😢 You lost the game!');
      score--;
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');

  setNumber('?');

  setScore(score);

  document.querySelector('.guess').value = '';

  bodyColor('#222');

  setNumberWidth('15rem');
});

'use strict';

//////////////////////Selecting and Manipulating Elements--------

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number !!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);

*/

// --------Handling Click Events --------

let secretNumber = Math.trunc(Math.random() * 20) + 1; // generated random number between 1  nd  20 , trunc - rounds up the decimal value

// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  //0 is a falsy value
  if (!guess) {
    //when there is no Input
    // document.querySelector('.message').textContent = 'No Number..!';
    displayMessage('No Number..!!');

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Hy Correct Guess !!';

    displayMessage('Hy Correct Guess !!');

    document.querySelector('.number').textContent = secretNumber;

    //manipulating css style
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'umm Too High' : 'Too Low';

      displayMessage(guess > secretNumber ? 'umm Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = "Umm It's too high";
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Loose';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Ops Too Low..';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Loose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//challenge on again! button to reset game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  // document.querySelector('.message').textContent = 'Play Again';
  displayMessage('Play Again');

  document.querySelector('.number').textContent = '?';

  //manipulating css style
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
});

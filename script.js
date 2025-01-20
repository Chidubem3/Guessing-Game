'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".highscore").textContent = localStorage.getItem('highestScore') ||  0;
// document.querySelector('.number').textContent = secretNumber;

const dispalyMessage = function (message) {
  document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    dispalyMessage('⛔ No Number!');
  
    // when player wins
  } else if (guess === secretNumber) {
    dispalyMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    checkHighScore();

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈Too High!': '📉Too Low!';

      dispalyMessage(guess > secretNumber ? '📈Too High!': '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '☹ You lost the game!';
      dispalyMessage('☹ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  
});

const checkHighScore = ()=>{
  if (score > parseInt(localStorage.getItem('highestScore')) || localStorage.getItem('highestScore') === null ) {
    localStorage.setItem("highestScore", score);
    document.querySelector(".highscore").textContent = localStorage.getItem('highestScore')
    // alert("New Hightest Score: " + score)
  }
}


document.querySelector('.again').addEventListener("click",()=>{
  location.reload();
});

document.querySelector('.reset').addEventListener("click",()=>{
  localStorage.clear();
  location.reload();
});

// day 7 no 11
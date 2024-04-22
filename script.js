'use strict'

// set up DOM variables
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const viewNumber = document.querySelector('.number');
const inputGuess = document.querySelector('.guess');
const viewMessage = document.querySelector('.message');
const viewScore = document.querySelector('.score');
const viewHighscore = document.querySelector('.highscore');

// set up program variables
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
btnAgain.disabled = true;

btnCheck.addEventListener('click', check);
btnAgain.addEventListener('click', resetGame);

function check() {
    // check empty input
    const inputStr = inputGuess.value;
    if (inputStr === '') {
        viewMessage.textContent = '⚠️ Please enter a number!';
        return;
    }

    const inputNum = Number(inputStr);
    if (inputNum !== randomNumber) {
        const message = inputNum > randomNumber ? '📈 Too High!' : '📉 Too Low!';
        viewMessage.textContent = message;
        decreaseScore();
        if (score === 0) {
            declareLoser();
        }
        return;
    }

    declareWinner();
}

function decreaseScore() {
    score--;
    viewScore.textContent = score;
}

function declareLoser() {
    btnCheck.disabled = true;
    inputGuess.disabled = true;
    btnAgain.disabled = false;
    viewMessage.textContent = '😢 You lose!'
}

function declareWinner() {
    document.querySelector('body').style.backgroundColor = '#60b347';
    viewNumber.textContent = randomNumber;
    viewNumber.style.width = '30rem';
    viewMessage.textContent = '🎉 You win!'
    btnCheck.disabled = true;
    inputGuess.disabled = true;
    btnAgain.disabled = false;
    adjustHighscore();
}

function adjustHighscore() {
    if (score > highscore) {
        highscore = score;
        viewHighscore.textContent = highscore;
    }
}

function resetGame() {
    btnCheck.disabled = false;
    inputGuess.disabled = false;
    inputGuess.value = '';
    btnAgain.disabled = true;
    document.querySelector('body').style.backgroundColor = '#222';
    viewNumber.style.width = '15rem';
    viewNumber.textContent = '?';
    viewMessage.textContent = 'Start guessing...';
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    viewScore.textContent = '20';
}


const number = document.querySelector('.number');
const input = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');

// generate a random number between 1-20
let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let currentHighscore = Number(highscore.textContent);
btnAgain.disabled = true;

function checkValue() {
    const inputValue = input.value;
    // check for empty input
    if (inputValue === '') {
        writeMessage('⛔ Please input a number!');
        return;
    }

    const inputNum = Number(inputValue);
    if (inputNum > randomNum) {
        writeMessage('📈 Too high!');
        decreasaeScore();
    } else if (inputNum < randomNum) {
        writeMessage('📉 Too Low!');
        decreasaeScore();
    } else {
        declareWinner();

    }

    // check if score equal 0
    if (score === 0) {
        writeMessage('😭 You lose!');
        btnCheck.disabled = true;
    }
}

function decreasaeScore() {
    score--;
    document.querySelector('.score').textContent = score;
}

function writeMessage(msg) {
    message.textContent = msg;
}

function declareWinner() {
    writeMessage('🎉 You win!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = randomNum;
    btnCheck.disabled = true;
    btnAgain.disabled = false;
    if (score > currentHighscore) {
        currentHighscore = score;
        highscore.textContent = currentHighscore;
    }

}

function reset() {
    document.querySelector('body').style.backgroundColor = '#222';
    number.style.width = '15rem';
    number.textContent = '?';
    message.textContent = 'Start Guessing...';
    score = 20;
    document.querySelector('.score').textContent = score;
    btnAgain.disabled = true;
    input.value = '';
    btnCheck.disabled = false;
}
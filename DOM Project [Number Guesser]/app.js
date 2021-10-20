//Game variables
let mn = 1, 
    mx = 10, 
    winningNumber = generateRandomWinningNumber(mn, mx), 
    numberOfGuessesLeft = 3;
//UI variables
const game = document.querySelector('#game'), 
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign min and max to the UI
minNum.textContent = mn
maxNum.textContent = mx;

//Play again event listener
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

//Listen guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //validate if the input is correct
    if(isNaN(guess) || guess < mn || guess > mx) {
        setMessage(`Please enter a number between ${mn} and ${mx}`, 'red');
    }
    //Check for winning
    if(guess === winningNumber) {
        gameOver(true);
    } else {
        numberOfGuessesLeft -= 1;
        if(numberOfGuessesLeft === 0) {
            gameOver(false);
        } else {
            //game continues
            guessInput.value = '';
            setMessage(`OPPS! Wrong guess! Try again! Guesses Left: ${numberOfGuessesLeft}`, 'red');
        }
    }
});
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(state) {
    //disable input
    guessInput.disabled = true;
    console.log(state);
    if(state === true) {
        guessInput.style.borderColor = 'green';
        setMessage(`CONGRATULATIONS! Your guess is correct!`, 'green');
    } else {
        guessInput.style.borderColor = 'red';
        setMessage(`GAME OVER! You lost! The correct number is ${winningNumber}.`, 'red');
    }
    //play again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//generate random winning number between min and max
function generateRandomWinningNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

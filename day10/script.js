document.addEventListener('DOMContentLoaded', initGame);

let secretNumber;

function initGame() {
    resetGame();
}

function resetGame() {
    secretNumber = generateRandomNumber();
    document.getElementById('userGuess').value = '';
    document.getElementById('resultMessage').textContent = '';
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    if (userGuess === secretNumber) {
        displayResult('Congratulations! You guessed the correct number.');
    } else {
        const difference = Math.abs(secretNumber - userGuess);
        let message = '';

        if (difference <= 10) {
            message = 'close';
        } else if (difference <= 20) {
            message = 'little close';
        } else {
            message = 'far';
        }

        displayResult(`Try again! ${message}`);
    }
}

function displayResult(message) {
    document.getElementById('resultMessage').textContent = message;
}

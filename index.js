function guessNumber(guess){
    if (guess != 25){
        return 'not it';
    }
}
function strictGuessNumber(guess){
    if (guess !== 25){
        return 'not it';
    }
}

document.getElementById('result').innerHTML = strictGuessNumber(24);
document.getElementById('result').innerHTML += guessNumber(24);
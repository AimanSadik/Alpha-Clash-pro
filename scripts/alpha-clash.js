
function playAgain(){
    hideElementById('score-section');
    showElementById('playground-screen');

    // get previous values
    setPreviousValueById('current-life-left', 3);
    setPreviousValueById('current-score', 0);
}





// keyboard interactions

function keyBoardButtonPress(e) {
    const playerPressed = e.key;

    const currentAlphabet = document.getElementById('display-alphabet');
    const smallAlphabet = currentAlphabet.innerText;
    const expectedAlphabet = smallAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {

        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        removeBackgroundColor(expectedAlphabet);

        continueGame();
    }
    else {
        const currentLifeElement = document.getElementById('current-life-left');
        const currentifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentifeText);

        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;

        if (newLife === 0) {
            
            gameOver();
        }
    }
}
document.addEventListener('keyup', keyBoardButtonPress);




function continueGame() {

    const alphabet = randomAlphabet();



    const currentAlphaberElement = document.getElementById('display-alphabet');
    currentAlphaberElement.innerText = alphabet;

    setBackgroundColor(alphabet);
}



function play() {
    hideElementById('home-screen');
    showElementById('playground-screen');
    continueGame();
}



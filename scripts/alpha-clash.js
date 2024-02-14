




function continueGame() {

    const alphabet = randomAlphabet();

    

    const currentAlphaberElement = document.getElementById('display-alphabet');
    currentAlphaberElement.innerText = alphabet;
}



function play() {
    hideElementById('home-screen');
    showElementById('playground-screen');
    continueGame();
}

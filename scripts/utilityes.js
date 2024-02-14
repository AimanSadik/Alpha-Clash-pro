
function setPreviousValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function gameOver(){
    hideElementById('playground-screen');
    showElementById('score-section');

    const lastScore = setPreviousValueById('current-score');
    setPreviousValueById('game-last-score', lastScore);
    return lastScore;
}


function setBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-500');
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-500');
}



function randomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

function hideElementById(elementId) {

    const element = document.getElementById(elementId)
    element.classList.add('hidden');

}
function showElementById(elementId) {

    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}



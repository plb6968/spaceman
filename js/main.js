
/*----- constants -----*/

const correctSound = new Audio('sounds/correct-guess.wav');
const wrongSound = new Audio('sounds/wrong-guess.wav');
const loseSound = new Audio('sounds/game-lost.wav');
const winSound = new Audio('sounds/game-win.wav');

 const wordsArr = [
    'adult', 'anger', 'agree', 
    'aline', 'begin', 'brave',
    'child', 'class', 'clock', 
    'dance', 'dream', 'drive',
    'earth', 'entry', 'event',
    'feild', 'faith', 'focus',
    'glass', 'group', 'green',
    'index', 'input', 'judge',
    'level', 'model', 'novel',
    'order', 'peace', 'queen',
    'radio', 'scope', 'title',
    'unity', 'value', 'while'];

/*----- state variables -----*/

let randWord; //contains the random word selected from words array. 
let curWord; // contains array of each letter from randWord.
let currentSelect; //contains current letter, selected by the event listener. 
let wrongGuess; // contatins the remaining turns before player loses. 
let correctGuess; //contains array of correct letters chosen by user. 
let isWinner;
let isLoser;

/*----- cached elements  -----*/

let msgBox = document.getElementById('msgBox');
let correctLetters = document.getElementById('correctLetters');
let spaceman = document.getElementById('spaceman');
let wrongLtrs = document.getElementById('incLtrList');
let letters = document.getElementsByClassName('aLetters');
let lostMsg = document.getElementById('lost-message');


/*----- event listeners -----*/
document.getElementById('availLetters').addEventListener('click', handleMove);
document.getElementById('plyAgain').addEventListener('click', init)
/*----- functions -----*/

init();


function init() {
    wrongGuess = 0;
    correctGuess = 0;
    chooseWord();
    render();
}

function handleMove(evt) {
    currentSelect = evt.target;
    renderMove();
}

function checkForWinner () {
    return correctGuess === randWord.length;
}

function checkForLoser () {
    return wrongGuess >= 6;
}

function render() {
    renderBoard();
    renderMessage();
}

function renderMove() {
    // put gaurd here.   
    if(currentSelect.classList.contains('aLetters') !== true) {
        return;
    } else if(checkForLoser() === true || checkForWinner() === true) {
        return;
    }
    console.log(currentSelect);
    curWord.forEach(function(curLetter, idx) {
        if(currentSelect.innerText === curLetter.toUpperCase()) {
            document.getElementById(`${idx}`).style.display = 'grid';
            document.getElementById(`${idx}`).style.gridArea = `1 / ${idx + 1}`;
            msgBox.innerText = 'CORRECT GUESS';
            correctSound.play();
            correctGuess += 1;
           }    
       });
    
    let select = currentSelect.innerText.toLowerCase();
    let isRight = curWord.includes(select);
    
    if(isRight === false) {
        wrongLtrs.innerText += `${currentSelect.innerText}`;
        msgBox.innerText = 'INCORRECT GUESS';
        msgBox.style.fontSize = '30px';
        wrongGuess += 1;
        spaceman.src = `img/spaceman-${wrongGuess}.jpg`;
        wrongSound.play();
    }
    renderMessage();
    
    document.getElementById(`${currentSelect.innerText}`).style.visibility = 'hidden';
}

function renderMessage() {
    if(checkForWinner() === true) {
        msgBox.innerText = 'Congratulations, YOU WON';
        winSound.play();
    }
    if(checkForLoser() === true) {
        msgBox.innerText = 'YOU LOST,  Try again'
        lostMsg.innerText = `CORRECT WORD: ${randWord.toUpperCase()}`
        lostMsg.style.visibility = 'visible';
        loseSound.play() 
    }
}

function renderBoard() {
    spaceman.src = `img/spaceman-${wrongGuess}.jpg`
    lostMsg.style.visibility = 'hidden'
    correctLetters.innerHTML = null;
    wrongLtrs.innerText = '';
    for (i = 0; i < letters.length; i++) {
        letters[i].style.visibility = 'visible'
    }
    //takes rand word, splits to array of letters. 
    curWord = randWord.split('');
    console.log(curWord)
    // binds letters from curWord to spot on the board.
    curWord.forEach(function(letter, idx) {
        correctLetters.innerHTML += `<div id="${idx}">${letter.toUpperCase()}</div>`;
    })
    
    msgBox.innerText = 'GUESS A LETTER';
}

// Choose a random word, from wordsArr, and return value. 
function chooseWord() {
    randWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    return randWord;
}
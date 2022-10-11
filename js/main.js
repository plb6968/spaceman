
/*----- constants -----*/

wordsArr = ['adult', 'anger', 'agree', 
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
let wrongLtrs; // contains the letter of a wrong selection
let correctGuess; //contains array of correct letters chosen by user. 
let isWinner;
let isLoser;

/*----- cached elements  -----*/
let msgBox = document.getElementById('msgBox');
let correctLetters = document.getElementById('correctLetters');
let spaceman = document.getElementById('spaceman');
wrongLtrs = document.getElementById('incorrectLtrs');

/*----- event listeners -----*/
document.getElementById('availLetters').addEventListener('click', handleMove);

/*----- functions -----*/

init();


function init() {
    chooseWord();
    render();
    wrongGuess = 0;
    correctGuess = 0;
    isWinner = false;
    isLoser = false;
}

function handleMove(evt) {
    currentSelect = evt.target;
    renderMove();
}

function checkForWinner () {
    return correctGuess === randWord.length;
}

function checkForLoser () {

}

function render() {
    renderBoard();
}

function renderMove() {
 // put gaurd here.   
    document.getElementById(`${currentSelect.innerText}`).style.display = 'none';
    
    curWord.forEach(function(curLetter, idx) {
        if(currentSelect.innerText === curLetter.toUpperCase()) {
            document.getElementById(`${idx}`).style.display = 'grid';
            document.getElementById(`${idx}`).style.gridArea = `1 / ${idx + 1}`;
            msgBox.innerText = 'CORRECT GUESS';
            correctGuess += 1;
        }    
    });
    
    let select = currentSelect.innerText.toLowerCase();
    let isRight = curWord.includes(select);
    
    if(isRight === false) {
        wrongLtrs.append(`${currentSelect.innerText}`);
        msgBox.innerText = 'INCORRECT GUESS';
        msgBox.style.fontSize = '30px';
        wrongGuess += 1;
        spaceman.src = `img/spaceman-${wrongGuess}.jpg`;
    }
}

function renderBoard() {
    //takes rand word, splits to array of letters. 
    curWord = randWord.split('');
    console.log(curWord)
    // binds letters from curWord to spot on the board.
    curWord.forEach(function(letter, idx) {
        correctLetters.innerHTML += `<div id="${idx}">${letter.toUpperCase()}</div>`;
    })
}

// Choose a random word, from wordsArr, and return value. 
function chooseWord() {
    randWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    return randWord;
}
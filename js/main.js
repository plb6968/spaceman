
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

let winner;
let randWord; //contains the random word selected from words array. 
let curWord; // contains array of each letter from randWord.
let currentSelect; //contains current letter, selected by the event listener. 
let turnsRemain;
let wrongPieces;
let correctPeices;

/*----- cached elements  -----*/
let msgBox = document.getElementById('msgBox');
let correctLetters = document.getElementById('correctLetters');

/*----- event listeners -----*/
document.getElementById('availLetters').addEventListener('click', handleMove);

/*----- functions -----*/

init();


function init() {
    chooseWord();
    render();
}

function handleMove(evt) {
    currentSelect = evt.target;
    // Test to see if current selection is in curWord.

}

function render() {
    renderBoard();
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
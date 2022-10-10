
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
//constains word chosen from words array.
let randWord;
let curWord;
let turnsRemain;
let wrongPieces;
let correctPeices;
let currentSelect;

/*----- cached elements  -----*/
let msgBox = document.getElementById('msgBox');
let correctLetters = document.getElementById('correctLetters');


/*----- event listeners -----*/


/*----- functions -----*/

init();


function init() {
    chooseWord();
    renderBoard();
}

function renderBoard() {
    //takes rand word, splits to array of letters. 
    curWord = randWord.split('');
    console.log(curWord)
    // for Each loop placing leters one by one onto board#corrects letters.
    curWord.forEach(function(letter, idx) {
        correctLetters.innerHTML += `<div id="${idx}">${letter.toUpperCase()}</div>`;
    })
    // display none for letters. 
}

// Choose a random word, from wordsArr, and return value. 
function chooseWord() {
    randWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    return randWord;
}
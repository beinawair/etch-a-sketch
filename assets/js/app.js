//variables
let initialColor = 'black';
let initialGrid = 16;
let onCLick = true;

//selector
let board = document.querySelector('.board');
let squareGrid = board.querySelectorAll('div');
const error = document.querySelector('.error-message');

//functions main board
function mainBoard(number) {
    squareGrid.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    
    let gridSize = number * number;

    for(let i = 0; i < gridSize; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorize);
        square.className = 'square';
        board.insertAdjacentElement('beforeend', square);
    }
}

//call out main function
mainBoard(initialGrid);

//function change grid size
function changeGrid(number) {
    console.log(typeof(number))
    if (number <= 2) {
        error.innerText = 'Size is too small';
    } else if (number > 100) {
        error.innerText = 'Size is too big';
    } else {
        error.innerText = '';
        mainBoard(number)
    }
}

//function reset board
function resetBoard() {
    let squareGrid = document.querySelector('.board').querySelectorAll('div');
    squareGrid.forEach((div) => (div.style.backgroundColor = 'white'));
    board.style.gridTemplateColumns = `repeat(${initialGrid}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${initialGrid}, 1fr)`;
}

//function colorize
function colorize() {
    if (onCLick) {
        if (initialColor === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = initialColor;
        }
    }
}

//get color from button element clicked
function color(buttonChoice) {
    initialColor = buttonChoice;
}
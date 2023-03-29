const tiles = document.querySelectorAll(".tile");
const resetBtn = document.querySelector(".reset-btn");
const scoreboardX = document.querySelector('.score-x')
const scoreboardO = document.querySelector('.score-o')
const playerOWins = 'Player O Wins'
const winningCombos = [    ['square-1', 'square-2', 'square-3'],
['square-4', 'square-5', 'square-6'],
['square-7', 'square-8', 'square-9'],
['square-1', 'square-4', 'square-7'],
['square-2', 'square-5', 'square-8'],
['square-3', 'square-6', 'square-9'],
['square-1', 'square-5', 'square-9'],
['square-3', 'square-5', 'square-7'],
];
const message = document.querySelector('.message')

// This will enable clicking on the gameboard
squares.forEach(square => {
    // There is a function called clickFunction that will cause the squares to be clickable
    square.addEventListener('click', clickFunction);
  });

function clickFunction(event) {
    const square = event.target;
    const position = square.classList[1];

    if(square.innerHTML !== '') {
        return;
    }
}

//This function with start a new game
function startNewGame() {


  //Event listener that will be activated when reset button is clicked
  resetBtn.addEventListener("click", (event) => {
    //Prevents page from reloading when clicked
    event.preventDefault();

    

    // Call the clearBoard() function to actually clear the board
    clearBoard();

    // This function will display who's turn it is
    showMessage();
  });
}

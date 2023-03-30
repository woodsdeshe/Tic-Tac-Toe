// Variables that access the squares, reset button, scoreboards , and messaging for the game that will stay constant
const gameBoard = document.querySelector(".game-board");
const resetBtn = document.querySelector(".reset-btn");
const scoreboardX = document.querySelector('.score-x')
const scoreboardO = document.querySelector('.score-o')
const message = document.querySelector('.message')

// Variables that access the current player, game over, X and O scores that will change based on conditions of the game
let currentPlayer = 'X'
let gameOver = false
let xScore = 0
let oScore = 0
let markedSquaresByPlayer = {
    X: [],
    O: []
  };

// Winning combos array that will be used to tell the computer what positions the players need to have in order to win


// This event listener will check to see if the tiles are empty and will fill them with the symbol of the current player

gameBoard.addEventListener("click", event => {
    event.preventDefault();

    // This variable will hold the square that gets clicked using the .target property
    const square = event.target

    // Checks to see if the square contains a class of tile and the square is empty. If it's empty then the square will contain a symbol and alternate the symbol according to the current player
    if(square.classList.contains('tile') && square.textContent === '') {
        square.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});


// This function will check to see which player has the winning set after each move
function checkForWinner() {
    // Nested arrays that show all the winning plays that are needed to win
    const winningCombo = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
      ];

      for (let i = 0; i < winningCombo.length; i++) {
        const 
      }
}
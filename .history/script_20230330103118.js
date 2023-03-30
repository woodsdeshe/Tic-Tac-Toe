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

// Check to see if the tiles contain a winning play of a specific player
function currentPlay(plays, player) {
    // The .every method checks through every tile within the player array that checks to see if they contain the current players symbol with a boolean "true" or "false" 
    return plays.every(tile => {
        tileElement = document.querySelector('.')
    })
}

// This function will check to see which player has the winning set after each move
function checkForWinner() {
    // Nested arrays that show all the winning plays that are needed to win
    const winningPlays = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
      ];

      // Loops through each array within winingPlays and stores the values in the variable plays
      for (let i = 0; i < winningPlays.length; i++) {
        const plays = winningPlays[i]

        // Create if/else conditions that will check to see if the current player has a winning play thats in winningPlays
        if()
      }
}

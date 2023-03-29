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

// Winning combos array that will be used to tell the computer what positions the players need to have in order to win
const winningCombos = [    ['square-1', 'square-2', 'square-3'],
['square-4', 'square-5', 'square-6'],
['square-7', 'square-8', 'square-9'],
['square-1', 'square-4', 'square-7'],
['square-2', 'square-5', 'square-8'],
['square-3', 'square-6', 'square-9'],
['square-1', 'square-5', 'square-9'],
['square-3', 'square-5', 'square-7'],
];

// This event listener will check to see if the tiles are empty and will fill them with the symbol of the current player

gameBoard.addEventListener("click", event => {
    event.preventDefault();

    const square = event.target

    if(square)
})

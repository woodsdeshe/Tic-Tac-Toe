// Variables that access the squares, reset button, scoreboards , and messaging for the game that will stay constant
const gameBoard = document.querySelector(".game-board");
const resetBtn = document.querySelector(".reset-btn");
const scoreboardX = document.querySelector(".score-x");
const scoreboardO = document.querySelector(".score-o");
const message = document.querySelector(".message");
const tile = document.querySelectorAll(".tile");

// Variables that access the current player, game over, X and O scores that will change based on conditions of the game
let currentPlayer = "X";
let gameOver = false;
let xScore = 0;
let oScore = 0;

// This event listener will check to see if the tiles are empty and will fill them with the symbol of the current player

gameBoard.addEventListener("click", (event) => {
  event.preventDefault();

  //This if statement checks to see if the game is over before allowing the players to continue playing. If gameOver is true, then the board becomes unclickable
  if (gameOver) {
    return;
  }

  // This variable will hold the square that gets clicked using the .target property
  const square = event.target;

  // Checks to see if the square contains a class of tile and the square is empty. If it's empty then the square will contain a symbol and alternate the symbol according to the current player
  if (square.classList.contains("tile") && square.textContent === "") {
    square.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

  checkForWinner();
});

// Check to see if the tiles contain a winning play of a specific player
function currentPlay(plays, player) {
  // The .every method checks through every tile within the player array that checks to see if they contain the current players symbol with a boolean "true" or "false"
  return plays.every((tile) => {
    tileElement = document.querySelector(`.square-${tile}`);
    return tileElement.textContent === player;
  });
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
    [3, 5, 7],
  ];

  // Loops through each array within "winingPlays" and stores the values in the variable "plays"
  for (let i = 0; i < winningPlays.length; i++) {
    const plays = winningPlays[i];

    // Create if/else conditions that will check to see if the current player has a winning play thats in 'winningPlays', if no one wins, it calls the "itsATie function to alert the players that the game is over and prevents the players from continuing to play using th endGame function"
    if (currentPlay(plays, "X")) {
      xScore++;
      alert("Player 'X' Wins !");
      gameOver = true;
      endGame();
    } else if (currentPlay(plays, "O")) {
      oScore++;
      alert("Player 'O' Wins !");
      gameOver = true;
      endGame();
    } else if (itsATie()) {
      alert("It's a tie! Game over!");
      gameOver = true;
      endGame();
    }
  }

  // This function iterates through all the tiles of the board and checks to see if the board is full. If there isn't any empty tiles left, it returns true.
  function itsATie() {
    for (let i = 0; i < tile.length; i++) {
      if (tile[i].textContent === "") {
        return false;
      }
    }
    return true;
  }

  // This function iterates through all the tiles in the game and removes the gameBoard listener so that the board is no longer clickable when the game is over
  function endGame() {
    for (let i = 0; i < tile.length; i++) {
      tile[i].removeEventListener("click", handleClick);
    }
  }

  function itsYourTurn() {
    currentPlayer === "X" ? "Player X, Your Turn" : "Player O, Your Turn";
  }
}

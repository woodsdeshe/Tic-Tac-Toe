// Variables that access the squares, reset button, scoreboards, music, and messaging for the game that will stay constant
const gameBoard = document.querySelector(".game-board");
const resetBtn = document.querySelector(".fa-arrow-rotate-left");
const scoreboardX = document.querySelector(".score-x");
const scoreboardO = document.querySelector(".score-o");
const playerX = document.querySelector('.player-x');
const playerO = document.querySelector('.player-o ');
const message = document.querySelector(".message");
const tile = document.querySelectorAll(".tile");
const startBtn = document.querySelector(".fa-play");
const musicOnBtn = document.getElementById('play');
const musicOffBtn = document.getElementById('mute')
const audio = document.getElementById('audio')

// Variables that access the current player, game over, X and O scores that will change based on conditions of the game
let currentPlayer = "X";
let gameOver = false;
let xScore = 0;
let oScore = 0;
let gamesPlayed = 0;


// This event listener allows for the music to start and the icon to switch to the play icon
musicOffBtn.addEventListener("click", (event => {
  event.preventDefault()

  audio.play()
  audio.currentTime = 0;
  musicOffBtn.style.display = 'none';
  musicOnBtn.style.display = 'block';
}))

// This event listener allows for the music to stop and the icon to switch to the mute icon
musicOnBtn.addEventListener("click", (event) => {
  event.preventDefault()

  audio.pause(); 
  musicOnBtn.style.display = 'none';
  musicOffBtn.style.display = 'block';
})

//This event listener will start the game when the start button is clicked
startBtn.addEventListener("click", startGame);

//Once the start button is clicked the function will allow the tiles to become clickable//
function startGame() { 
  //Updates the message variable to show who's turn it is on the screen
  message.textContent = `It's ${currentPlayer} turn`;
  gameOver = false;

  // This iterates through each tile and removes the class styles from each tile after every round
  tile.forEach((t) => {
    t.classList.remove("x-symbol", "o-symbol")
  })

  // This event listener will check to see if the tiles are empty and will fill them with the symbol of the current player
  gameBoard.addEventListener("click", (event) => {
    event.preventDefault();

    //This if statement checks to see if the game is over before allowing the players to continue playing. If gameOver is true, then the board becomes unclickable
    if (gameOver) {
      return;
    } 

    // This variable will hold the square that gets clicked using the .target property
    const square = event.target;

    // Checks to see if the square contains a class of tile and if the square is empty. If it's empty then the square will contain a symbol and alternate the symbol according to the current player
    if (square.classList.contains("tile") && square.textContent === "") {

      // This if statement adds or removes the appropriate symbol class based on the current player so that the colors of the symbols will be different
      if (currentPlayer === "X") {
        if (square.classList.contains("o-symbol")) {
          return; // If there's already an "o-symbol", do nothing
        }
        square.classList.add("x-symbol");
        square.classList.remove("o-symbol");
      } else {
        if (square.classList.contains("x-symbol")) {
          return; // If there's already an "x-symbol", do nothing
        }
        square.classList.add("o-symbol");
        square.classList.remove("x-symbol");
      }


      square.textContent = currentPlayer;

      //Updates the message variable to show who's turn it is on the screen
      message.textContent = `Game ${gamesPlayed + 1}: It's ${currentPlayer} turn`;
      gameOver = false;

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    //Calls the checkForWinner function after each turn to see if a player has won
    checkForWinner();
  });
}

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

    // Create if/else conditions that will check to see if the current player has a winning play thats in 'winningPlays', if no one wins, it calls the "itsATie" function to alert the players that the game is over and prevents the players from continuing to play using th endGame function"
    if (currentPlay(plays, "X")) {
      xScore++;
      scoreboardX.textContent = xScore;
      message.textContent = "Player X Wins!";
      gameOver = true;
      gamesPlayed++
      // After each round, this function clears the board so that players can play another
      tile.forEach((square) => {
        square.textContent = ""
      });
    } else if (currentPlay(plays, "O")) {
      oScore++;
      scoreboardO.textContent = oScore;
      message.textContent = "Player O Wins!";
      gameOver = true;
      gamesPlayed++
      tile.forEach((square) => {
        square.textContent = ""
      });
    } else if (itsATie()) {
      message.textContent = "Game over! It's a tie!!!";
      gameOver = true;
      gamesPlayed++
      tile.forEach((square) => {
        square.textContent = ""
      });
    }
  }

  // This function iterates through all the tiles on the board and checks to see if the board is full. If there isn't any empty tiles left, it returns true.
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
}

//This function resets the game
function resetGame() {
  tile.forEach((square) => {
    square.textContent = "";
    square.classList.remove("x-symbol");
    square.classList.remove("o-symbol");
  });
  message.textContent = "Press Start to Play";
  currentPlayer = "X";
  gameOver = false;
}

// This event listener resets all the values of the game to the default value when the reset button is clicked and calls the resetGame function to reset tile values and restarts the game
resetBtn.addEventListener("click", () => {
  xScore = 0;
  oScore = 0;
  gamesPlayed = 0;
  scoreboardX.textContent = "0";
  scoreboardO.textContent = "0";

  resetGame();
});



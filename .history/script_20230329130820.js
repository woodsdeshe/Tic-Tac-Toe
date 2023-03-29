const tiles = document.querySelectorAll(".tile");

// This function will clear all of the X's and O's off the board
function clearBoard() {
    // Loop through each tile and clear the values within the square
    tiles.forEach((tile) => {
      tile.innerHTML = "";
    });
  }

// This will enable clicking on the gameboard
function enableClicks() {
     // Loop through each tile and add click to each tile
    tiles.forEach((tile) => {
        tile.addEventListener("click",() => {
            if (tile.innerHTML !== '') {

            }
      });
}

//This function with start a new game
function startNewGame() {
  const resetBtn = document.querySelector(".reset-btn");

  //Event listener that will be activated when reset button is clicked
  resetBtn.addEventListener("click", (event) => {
    //Prevents page from reloading when clicked
    event.preventDefault();

    //Game variables that function will return to when button is clicked
    turnCount = 0;
    currentPlayer = "X";
    winner = null;

    // Call the clearBoard() function to actually clear the board
    clearBoard();

    // This function will display who's turn it is
    showMessage();
    
  });
}



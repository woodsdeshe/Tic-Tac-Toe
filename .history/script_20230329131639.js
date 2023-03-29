const tiles = document.querySelectorAll(".tile");

// This will enable clicking on the gameboard
squares.forEach(square => {
    // There is a function called clickFunction that will cause the squares to be clickable
    square.addEventListener('click', clickFunction);
  });

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

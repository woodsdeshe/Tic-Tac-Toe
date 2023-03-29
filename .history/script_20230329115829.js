//This function with start a new game

function startNewGame() {
const resetBtn = document.querySelector('b')
    // This function will clear the board
    clearBoard();

    //Game variables that the clearBoard function will return to
    turnCount = 0;
    currentPlayer = 'X';
    winner = null;

    // This function will display who's turn it is 
    showMessage()
    // This will enable clicking on the gameboard
    enableClicks()
}
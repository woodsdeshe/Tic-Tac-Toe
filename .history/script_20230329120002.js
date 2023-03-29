//This function with start a new game

function startNewGame() {
const resetBtn = document.querySelector('.reset-btn')

//Event listener that will be activated when reset button is clicked
resetBtn.addEventListener("click", event => {
    //Prevents page from reloading when clicked
    event.preventDefault()
})
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
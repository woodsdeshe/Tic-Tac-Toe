//This function with start a new game

function startNewGame() {
const resetBtn = document.querySelector('.reset-btn')

//Event listener that will be activated when reset button is clicked
resetBtn.addEventListener("click", event => {
    //Prevents page from reloading when clicked
    event.preventDefault()

    //Game variables that function will return to when button is clicked
    turnCount = 0;
    currentPlayer = 'X';
    winner = null;

    // This function will clear all of the X's and O's off the board
    function clearBoard() {
        
        const 
    }

})
  

    // This function will display who's turn it is 
    showMessage()
    // This will enable clicking on the gameboard
    enableClicks()
}
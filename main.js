let placement = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerTurn = 0; //0 means nobody, 1 is X turn, 2 is O turn
let winner = 0;

function Draw() {

//mapping the board, assigning numbers to spaces:
    const drawPlacement = [
        convertPlacement(placement[0]),
        convertPlacement(placement[1]),
        convertPlacement(placement[2]),
        convertPlacement(placement[3]),
        convertPlacement(placement[4]),
        convertPlacement(placement[5]),
        convertPlacement(placement[6]),
        convertPlacement(placement[7]),
        convertPlacement(placement[8]),
    ];
    console.log('To choose a place on board type place() with a place number 1-9 inside brackets.');
    console.log('Here is the current board:');
    console.log('');

    // Building the board
    const row1 = drawPlacement[0] + ' | ' + drawPlacement[1] + ' | ' + drawPlacement[2] + '\n';
    const row2 = drawPlacement[3] + ' | ' + drawPlacement[4] + ' | ' + drawPlacement[5] + '\n';
    const row3 = drawPlacement[6] + ' | ' + drawPlacement[7] + ' | ' + drawPlacement[8] + '\n';
    const structureRow = '--|---|--' + '\n';
    console.log(row1);
    console.log(structureRow);
    console.log(row2);
    console.log(structureRow);
    console.log(row3);
    console.log('');

    //logic whose turn it is:   
    let playerName;

    if (playerTurn === 1) {
        playerName = "X"; 
    } else {
        playerName = "O";
    }

    if (winner === 1 || winner === 2) {
        console.log(playerName + ' has won! type restart() to start a new game');

    } else if (winner === 3) {
        console.log('Its a draw, nobody wins. type restart() to start a new game');
    } else {
        console.log('Player ' + playerName + ' enter your choice');
    }
}
 
function convertPlacement(number) { 
    //when it takes 0 it outputs the position on the drawing board
    //when it takes 1 it will draw X
    //when it takes 2 it will draw o
    if (number === 0) {
        return ".";
    } else if (number === 1) {
        return "X";
    } else {
        return "O";
    }
}
function startGame() {
    console.log('Welcome to Tic Tac Toe!');
    placement = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //resetting the array.
    winner = 0; // no winners at the start of the game.
    turn(1); //so that "X" starts. "X" always starts
}
function turn(nextPlayerTurn) {
    playerTurn = nextPlayerTurn;
    Draw();
}
function place(position) {
    position--;
    //Checking if players chose numbers (positions) from 0 to 8
    if (position < 0 || position > 8) {
        console.log("Choose numbers from 1 to 9 only.");
        return;
    }
    //Checking if someone has taken the spot already
    if (placement[position] !== 0) {
        console.log("Someone has already taken that spot. Choose a different one.");
        return;
    }
    // setting the placement position to whose turn it is
    placement[position] = playerTurn;

    if (checkForWinner()) {
        winner = playerTurn;
        Draw(); //to tell someone has won
    } else {
        //check for draw , check if all placements are taken.
        //if none of them is 0 then we have draw
        if (placement[0] !== 0 && placement[1] !== 0 && placement[2] !== 0 && placement[3] !== 0 && placement[4] !== 0 &&
            placement[5] !== 0 && placement[6] !== 0 && placement[7] !== 0 && placement[8] !== 0){
            winner = 3;
            Draw(); //to tell it is a draw
            return;
        }
        //This case there is no winner and no draw. Game goes on, changing the player turn


        turn(playerTurn === 1 ? 2 : 1);
    }
}
function checkForWinner() {
    return (checkRow(0, 1, 2) ||
        checkRow(3, 4, 5) ||
        checkRow(6, 7, 8) ||
        checkRow(0, 3, 6) ||
        checkRow(1, 4, 7) ||
        checkRow(2, 5, 8) ||
        checkRow(0, 4, 8) ||
        checkRow(2, 4, 6));
}

function checkRow(number1, number2, number3) {
    return placement[number1] === playerTurn && placement[number2] === playerTurn && placement[number3] === playerTurn;
}
function restart() {
    startGame();
}
startGame();

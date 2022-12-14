//A SIMPLE GAME OF ROCK PAPER SICCORS IN THE CONSOLE OF THE BROWSER. 

//------This Function opens a prompt window at the start of the game to declare, how many rounds will be played------//

function numOfRounds() {
    let n = null;
    while (n === null) {
        //Open a window in the Browser to let the player make an input and save this input into the variable "rounds".
        let rounds = prompt('How many rounds do you want to play?');
        //Now check if this input is a number.
        if (isNaN(rounds)) {
            //isNaN checks, if the value of the variable "rounds" is from the datatype NUMBER. 
            //If it's not a number, the browser shoots an alert and the while loop starts from the top (because the variable n is still null).
            alert('I need a Number');
        } else {
            //The variable "rounds" contains a number now. 
            //Now store the value of rounds in n.
            n = parseInt(rounds)
            //parseInt transforms the variable into an integer/number (just to make sure it actually is a "whole" number)//
        }
    }
    //When the while loop is finished and a number is stored in n, return this number.
    return n;
}

//------This Function declares, which choice the Computer takes-----//

function computerPlay() {
    //Create an Array with all the options the computer can choose.
    const options = ["Rock", "Paper", "Sizzors"];
    //Now create a RANDOM number between 0 and 2. 0 and 2 because the first index of an Array is 0 and this Array has 3 options.
    //We work with the index of the Array here to declare which option this function returns. 
    // ----- EXAMPLE: options[0] = "Rock" ------ //
    let index = Math.floor(Math.random() * options.length)
    //Math.random returns a number between 0 and 1. It can contain 0, but never 1. With the Math.floor (rounding down) the result will always be between 0 and 2. 
    return options[index]
}

//------This Function declares the winner of one Round------//

function playRound(playerSelection, computerSelection) {
    //This Function gets handed 2 parameters: playerSelection and computerSelection.
    let computer = computerSelection.toLowerCase();
    let player = playerSelection.toLowerCase();
    //The string in the variables computer and player gets converted to all lowercase letters.
    //Now compare the inputs.
        if (player === computer) return "It's a Tie!";
        if (player === 'rock') {
            if (computer === 'paper') return `The Computer Won - ${computer} beats ${player}`;
            else return `You Won - ${player} beats ${computer}`;
        }
        if (player === 'sizzors') {
            if (computer === 'rock') return `The Computer Won - ${computer} beats ${player}`;
            else return `You Won - ${player} beats ${computer}`;
        }
        if (player === 'paper') {
            if (computer === 'sizzors') return `The Computer Won - ${computer} beats ${player}`;
            else return `You Won - ${player} beats ${computer}`;
        } 
}

//------This Function is the main INITIALIZIER. It starts the game and calls the other functions.------//

function game(){
    alert("Let's play Rock Paper Sizzors!")
    let score_player = 0;
    let score_computer = 0;
    //At this point the function "numOfRounds" from the top gets called. A window appears in the browser and the player chooses how many rounds he/she wants to play.
    let n = numOfRounds();
    //The declared number gets stored in n and implemented in the for loop.
    for(let i = 0; i < n; i++) {
        let computerSelection = computerPlay();
        //The computers choice gets stored in computerSelection because we call the function from the top (line 28), which returns the choice in form of a string.
        let playerSelection = prompt('Choose between Rock, Paper or Sizzors');
        //The players choice gets stored in playerSelection after the player makes an input un the prompt window.
        let score = playRound(playerSelection,computerSelection);
        //The Function playRound (line 42) gets called and gets handed the two parameters. The result that gets returned py playRound is stored in score. 
        while (score == undefined) {
            alert('no valid input!'); 
            playerSelection = prompt('Watch your spelling...choose between Rock, Paper or Sizzors');
            score = playRound(playerSelection, computerSelection);
            //This while loop is an ERROR catch. If the players enters an invalid input in the prompt window, the score variable will be assigned the value undefined because "playRound" function only returns a string if the input is actually "rock", "paper" or "sizzors". 
        }
        //Now we check what the string in score says. If the String includes....
        if (score.includes('You Won')) { 
            score_player++;
            alert('You won this round!');
            console.log(`Round ${i+1}`, score);
        }
        if (score.includes('The Computer Won')) {
            score_computer++;
            alert('The damn Machine won this round!')
            console.log(`Round ${i+1}`, score)
        }
        if(score.includes('Tie')) {
            alert("It's a Tie..")
            console.log(`Round ${i+1}`, score);
        }
    } 
    //After the for loop is finished, we check the score variables and decide who has won the game. 
    if(score_player === score_computer) alert("It's a Tie!");
    else if(score_player > score_computer) {
        alert(`You won! Total Rounds won: ${score_player}`);
    } else {
        alert(`You lost...Total Rounds won: ${score_player}`);
    }
}

//------INITIALIZING THE GAME-----//

game();

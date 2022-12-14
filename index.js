//A SIMPLE GAME OF ROCK PAPER SICCORS IN THE CONSOLE OF THE BROWSER. 

//------This Function opens a prompt window at the start of the game to declare, how many rounds will be played------//

function numOfRounds() {
    let n = null;
    while (n === null) {
        let rounds = prompt('How many rounds do you want to play?');
        if (isNaN(rounds)) {
            alert('I need a Number');
        } else {
            n = parseInt(rounds)
        }
    }
    return n;
}

//------This Function declares, which choice the Computer takes-----//

function computerPlay() {
    const options = ["Rock", "Paper", "Sizzors"];
    let index = Math.floor(Math.random() * options.length)
    return options[index]
}

//------This Function declares the winner of one Round------//

function playRound(playerSelection, computerSelection) {
    let computer = computerSelection.toLowerCase();
    let player = playerSelection.toLowerCase();
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

//------This Function is the main initialzer. It starts the game and calls the other functions.------//

function game(){
    alert("Let's play Rock Paper Sizzors!")
    let score_player = 0;
    let score_computer = 0;
    let n = numOfRounds();
    for(let i = 0; i < n; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Choose between Rock, Paper or Sizzors');
        let score = playRound(playerSelection,computerSelection);
        //This next while loop is an ERROR catch. If the players enters an invalid input in the prompt window, the score variable will be assigned the value undefined because "playRound" function only returns a string if the input is actually "rock", "paper" or "sizzors". 
        while (score == undefined) {
            alert('no valid input!'); 
            playerSelection = prompt('Watch your spelling...choose between Rock, Paper or Sizzors');
            score = playRound(playerSelection, computerSelection);
        }
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

    if(score_player === score_computer) alert("It's a Tie!");
    else if(score_player > score_computer) {
        alert(`You won! Total Rounds won: ${score_player}`);
    } else {
        alert(`You lost...Total Rounds won: ${score_player}`);
    }
}

//------INITIALIZING THE GAME-----//

game();

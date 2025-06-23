var humanScore = 0;
var computerScore = 0;


function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        return "rock";
    }
    else if (num == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, Paper, or Scissors?");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lost the round! " + computerChoice + " beats " + humanChoice + ".")
        computerScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lost the round! " + computerChoice + " beats " + humanChoice + ".")
        computerScore += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You Lost the round! " + computerChoice + " beats " + humanChoice + ".")
        computerScore += 1;
    }

    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You won the round! " + humanChoice + " beats " + computerChoice + ".")
        humanScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You won the round! " + humanChoice + " beats " + computerChoice + ".")
        humanScore += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won the round! " + humanChoice + " beats " + computerChoice + ".")
        humanScore += 1;
    }

    else{
        console.log("Tie!");
    }
    
}

function playGame(){
    let round = 0;
    while (round < 5){
    let computerPlay= getComputerChoice();
    let humanPlay = getHumanChoice();
        playRound(humanPlay, computerPlay);
        round++;
    }
    if(humanScore == computerScore){
        console.log("The game is tied!")
    }
    else if(humanScore > computerScore){
        console.log("You Won!");
    }
    else{
        console.log("You Lost!");
    }
}

playGame();




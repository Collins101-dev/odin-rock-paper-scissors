function getComputerChoice(){
    let choice = Math.random();

    if (choice < 0.3) {
        let answer = "rock";
        return answer;
    } else if (choice > 0.3 && choice < 0.6) {
        let answer = "paper";
        return answer;
    } else {
        let answer = "scissors";
        return answer;
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

humanScore = 0;
computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){
    humanChoice = humanSelection;
    computerChoice = computerSelection;

    if (humanChoice == "rock" &&  computerChoice == "scissors"){
        console.log("You win. Rock beats sciccors.");
        humanScore += 1;
    } else if (humanChoice == "paper" &&  computerChoice == "rock") {
        console.log("You win. Paper beats rock.");
        humanScore += 1;
    } else if (humanChoice == "scissors" &&  computerChoice == "paper") {
        console.log("You win. Scissors beats paper.");
        humanScore += 1;
    } else if (computerChoice == "rock" &&  humanChoice == "scissors"){
        console.log("You lose. Rock beats sciccors.");
        computerScore += 1;
    } else if (computerChoice == "paper" &&  humanChoice == "rock"){
        console.log("You lose. Paper beats rock.");
        computerScore += 1;
    } else if (computerChoice == "scissors" &&  humanChoice == "paper"){
        console.log("You lose. Scissors beats paper.");
        computerScore += 1;
    } else if (humanChoice == computerChoice){
        console.log(`A tie. ${humanChoice} is same as ${computerChoice}.`)
    }

}

function playGame(){
    for (let i = 1; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log(`Congrats! You win with a score of ${humanScore}.`)

    }else if (computerScore > humanScore) {
        console.log(`Sorry. You lose to computer's score of ${computerScore}`)
    }
}

playGame()
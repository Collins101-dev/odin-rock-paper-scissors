function getComputerChoice() {
    let choice = Math.random ();

    if (choice < 0.3) {
        return "rock";
    } else if (choice < 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win. Rock beats scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win. Paper beats rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win. Scissors beats paper.");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose. Rock beats scissors.");
        computerScore++;
    // } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose. Paper beats rock.");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose. Scissors beats paper.");
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`A tie. ${humanChoice} is same as ${computerChoice}.`);
    } else {
        console.log("Invalid input. Please choose rock, paper, or scissors.");
    }
}


window.onload = () => {
    const buttons = document.createElement("div");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3= document.createElement("button");

    buttons.style.display = "flex";
    buttons.style.justifyContent = "center";
    buttons.style.alignItems = "center";
    buttons.style.gap = "20px"
    buttons.style.height = "200px";

    [button1, button2, button3].forEach(button => {
        button.style.width = "120px";
        button.style.height = "60px";
        button.style.fontSize = "20px";
    });

    button1.textContent = "Rock";
    button2.textContent = "Paper";
    button3.textContent = "Scissors";









    buttons.append(button1, button2, button3)
    document.body.appendChild(buttons)
};


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
//
//     if (humanScore > computerScore) {
//         console.log(`Congrats! You win with a score of ${humanScore}.`);
//     } else if (computerScore > humanScore) {
//         console.log(`Sorry. You lose to the computer's score of ${computerScore}.`);
//     } else {
//         console.log("It's a tie game!");
//     }
// }
//
// playGame();

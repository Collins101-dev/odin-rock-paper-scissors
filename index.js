let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.3) {
        return "rock";
    } else if (choice < 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        resultsDiv.innerHTML += `<p class="win">You win. Rock beats scissors.</p>`;
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultsDiv.innerHTML += `<p class="win">You win. Paper beats rock.</p>`;
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultsDiv.innerHTML += `<p class="win">You win. Scissors beats paper.</p>`;
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        resultsDiv.innerHTML += `<p class="lose">You lose. Rock beats scissors.</p>`;
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        resultsDiv.innerHTML += `<p class="lose">You lose. Paper beats rock.</p>`;
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        resultsDiv.innerHTML += `<p class="lose">You lose. Scissors beats paper.</p>`;
        computerScore++;
    } else if (humanChoice === computerChoice) {
        resultsDiv.innerHTML += `<p class="tie">A tie. ${humanChoice} is the same as ${computerChoice}.</p>`;
    } else {
        resultsDiv.innerHTML += `<p class="invalid">Invalid input.</p>`;
    }
}

function playGame(humanSelection) {
    if (roundCount >= 5) return;

    const computerSelection = getComputerChoice();

    resultsDiv.innerHTML += `<p class="round"><strong>Round ${roundCount + 1}</strong></p>`;
    resultsDiv.innerHTML += `<p class="choice">You chose: <span>${humanSelection}</span></p>`;
    resultsDiv.innerHTML += `<p class="choice">Computer chose: <span>${computerSelection}</span></p>`;

    playRound(humanSelection, computerSelection);
    roundCount++;

    if (roundCount === 5) {
        resultsDiv.innerHTML += `<p class="final-score">Final Score — You: ${humanScore} | Computer: ${computerScore}</p>`;
        if (humanScore > computerScore) {
            resultsDiv.innerHTML += `<h3 class="final-win">🎉 Congrats! You win.</h3>`;
        } else if (computerScore > humanScore) {
            resultsDiv.innerHTML += `<h3 class="final-lose">😞 Sorry. You lose.</h3>`;
        } else {
            resultsDiv.innerHTML += `<h3 class="final-tie">🤝 It's a tie!</h3>`;
        }
    }
}

let resultsDiv;

window.onload = () => {
    // Inject CSS styles dynamically
    const style = document.createElement("style");
    style.textContent = `
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 40px 20px;
      }

      #buttons {
        display: flex;
        justify-content: center;
        gap: 25px;
        margin-bottom: 40px;
      }

      button {
        background: #fff;
        border: none;
        border-radius: 12px;
        padding: 16px 30px;
        font-size: 18px;
        font-weight: 600;
        color: #764ba2;
        cursor: pointer;
        box-shadow: 0 8px 15px rgba(118, 75, 162, 0.3);
        transition: background 0.3s ease, transform 0.2s ease;
        user-select: none;
        min-width: 120px;
      }

      button:hover {
        background: #f0e6ff;
        transform: translateY(-3px);
        box-shadow: 0 12px 20px rgba(118, 75, 162, 0.5);
      }

      button:active {
        transform: translateY(-1px);
        box-shadow: 0 8px 15px rgba(118, 75, 162, 0.3);
      }

      #results {
        width: 100%;
        max-width: 480px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 14px;
        padding: 25px 30px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        overflow-y: auto;
        max-height: 400px;
      }

      #results p, #results h3 {
        margin: 8px 0;
        line-height: 1.4;
      }

      .round {
        font-weight: 700;
        font-size: 20px;
        margin-top: 18px;
        border-bottom: 2px solid #fff;
        padding-bottom: 4px;
      }

      .choice span {
        font-weight: 700;
        text-transform: capitalize;
      }

      .win {
        color: #4ade80; /* green */
        font-weight: 600;
      }

      .lose {
        color: #f87171; /* red */
        font-weight: 600;
      }

      .tie {
        color: #fbbf24; /* yellow */
        font-weight: 600;
      }

      .invalid {
        color: #f87171;
        font-weight: 600;
        font-style: italic;
      }

      .final-score {
        font-size: 18px;
        margin-top: 20px;
        font-weight: 700;
        border-top: 1px solid #ddd;
        padding-top: 10px;
        color: #ddd;
      }

      .final-win {
        color: #4ade80;
        margin-top: 15px;
      }

      .final-lose {
        color: #f87171;
        margin-top: 15px;
      }

      .final-tie {
        color: #fbbf24;
        margin-top: 15px;
      }
    `;
    document.head.appendChild(style);

    // Create buttons container
    const buttons = document.createElement("div");
    buttons.id = "buttons";

    const choices = ["rock", "paper", "scissors"];
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
        btn.addEventListener("click", () => playGame(choice));
        buttons.appendChild(btn);
    });

    document.body.appendChild(buttons);

    // Create results div
    resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    document.body.appendChild(resultsDiv);
};

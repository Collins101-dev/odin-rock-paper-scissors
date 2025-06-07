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

    // Create a round container for better grouping
    const roundContainer = document.createElement("div");
    roundContainer.className = "round-container";

    roundContainer.innerHTML = `
      <p class="round"><strong>Round ${roundCount + 1}</strong></p>
      <p class="choice">You chose: <span>${humanSelection}</span></p>
      <p class="choice">Computer chose: <span>${computerSelection}</span></p>
    `;

    resultsDiv.appendChild(roundContainer);

    playRound(humanSelection, computerSelection);

    roundCount++;

    // Scroll results div to bottom smoothly so latest results are visible
    resultsDiv.scrollTo({ top: resultsDiv.scrollHeight, behavior: 'smooth' });

    if (roundCount === 5) {
        const finalScore = document.createElement("p");
        finalScore.className = "final-score";
        finalScore.textContent = `Final Score — You: ${humanScore} | Computer: ${computerScore}`;
        resultsDiv.appendChild(finalScore);

        const finalMessage = document.createElement("h3");
        if (humanScore > computerScore) {
            finalMessage.className = "final-win";
            finalMessage.textContent = "🎉 Congrats! You win.";
        } else if (computerScore > humanScore) {
            finalMessage.className = "final-lose";
            finalMessage.textContent = "😞 Sorry. You lose.";
        } else {
            finalMessage.className = "final-tie";
            finalMessage.textContent = "🤝 It's a tie!";
        }
        resultsDiv.appendChild(finalMessage);

        restartButton.style.display = "inline-block";  // Show restart button when game ends
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    resultsDiv.innerHTML = "";
    restartButton.style.display = "none"; // Hide restart button during the game
}

let resultsDiv;
let restartButton;

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

      header {
        font-size: 3rem;
        font-weight: 900;
        letter-spacing: 4px;
        text-transform: uppercase;
        margin-bottom: 40px;
        color: #f9fafb;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
        user-select: none;
      }

      #buttons {
        display: flex;
        justify-content: center;
        gap: 25px;
        margin-bottom: 30px;
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
        max-height: 320px;
        margin-bottom: 20px;
        position: relative;
      }

      /* Fade effect at bottom to hint scroll */
      #results::after {
        content: "";
        pointer-events: none;
        position: sticky;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.15));
      }

      .round-container {
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      #results p, #results h3 {
        margin: 6px 0;
        line-height: 1.3;
      }

      .round {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 4px;
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

      #restart {
        background: #764ba2;
        color: #fff;
        font-weight: 700;
        padding: 14px 40px;
        border-radius: 14px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        user-select: none;
        font-size: 18px;
        border: none;
        display: none;
        transition: background 0.3s ease;
      }

      #restart:hover {
        background: #5a3a81;
      }
    `;
    document.head.appendChild(style);

    // Add header
    const header = document.createElement("header");
    header.textContent = "Rock Paper Scissors";
    document.body.prepend(header);

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

    // Create restart button
    restartButton = document.createElement("button");
    restartButton.id = "restart";
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener("click", restartGame);
    document.body.appendChild(restartButton);
};

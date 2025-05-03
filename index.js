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
    
}
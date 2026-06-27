function getComputerChoice() {
    let computer =  Math.floor (Math.random() * 3);

    if (computer === 0) {
        return "Paper";
    }
    else if (computer === 1) {
        return "Rock";

    }
    else {
        return "Sicssor";
    }

}

function getHumanChoice() {
    let human = prompt("Enter Choice: ");
    return human;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "Rock" && computerChoice === "Rock" ||
        humanChoice === "Paper" && computerChoice === "Paper" ||
        humanChoice === "Sicssor" && computerChoice === "Sicssor") {

        console.log(humanChoice);
        console.log(computerChoice);
        return "Tie";
    }else if ( humanChoice === "Paper" && computerChoice === "Rock" || 
               humanChoice === "Rock" && computerChoice === "Scissor" ||
               humanChoice === "Scissor" && computerChoice === "Paper") {
               console.log(humanChoice);
               console.log(computerChoice);
               return `${humanChoice} is greater than ${computerChoice}`;
    }else if (computerChoice === "Paper" && humanChoice === "Rock" || 
               computerChoice === "Rock" && humanChoice === "Scissor" ||
               computerChoice === "Scissor" && humanChoice === "Paper") {
               console.log(humanChoice);
               console.log(computerChoice);
                return `${computerChoice} is greater than ${humanChoice}`;

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const humanSelection2 = getHumanChoice()
const computerSelection2 = getComputerChoice();
const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();
const humanSelection4 = getHumanChoice()
const computerSelection4 = getComputerChoice();
const humanSelection5 = getHumanChoice()
const computerSelection5 = getComputerChoice();

 
console.log(playRound(humanSelection, computerSelection));
console.log(playRound(humanSelection2, computerSelection2));
console.log(playRound(humanSelection3, computerSelection3));
console.log(playRound(humanSelection4, computerSelection4));
console.log(playRound(humanSelection5, computerSelection5));

let humanScore = 0;
console.log("Computer Score: " + humanScore);

let computerScore = 0;

function getComputerChoice() {
    let computer =  Math.floor (Math.random() * 3);

    if (computer === 0) {
        return "Paper";
    }
    else if (computer === 1) {
        return "Rock";

    }
    else {
        return "Scissor";
    }

}

function getHumanChoice() {
    let human = prompt("Enter Choice: ");
    return human;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "Rock" && computerChoice === "Rock" ||
        humanChoice === "Paper" && computerChoice === "Paper" ||
        humanChoice === "Scissor" && computerChoice === "Scissor") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log("Tie")
        return "Tie";

    }else if ( humanChoice === "Paper" && computerChoice === "Rock" || 
        humanChoice === "Rock" && computerChoice === "Scissor" ||
        humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log(`${humanChoice} is greater than ${computerChoice}`);
        console.log("Human Wins")
        return "Human wins";
         
    }else if (computerChoice === "Paper" && humanChoice === "Rock" || 
        computerChoice === "Rock" && humanChoice === "Scissor" ||
        computerChoice === "Scissor" && humanChoice === "Paper") {
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log(`${computerChoice} is greater than ${humanChoice}`);
        return "Computer Wins";
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

let computerScore = 0;
let humanScore = 0;
let tie = 0;
let result = playRound(humanSelection, computerSelection);
let result1 = playRound(humanSelection2, computerSelection2);
let result2 = playRound(humanSelection3, computerSelection3);
let result3 = playRound(humanSelection4, computerSelection4);
let result4 = playRound(humanSelection5, computerSelection5);


if (result === "Human wins") {
       humanScore++;
}
else if (result === "Tie") {
    tie++;
}
else {
    computerScore++;
}


if (result1 === "Human wins") {
       humanScore++;
}

else if (result1 === "Tie") {
    tie++;
}
else {
    computerScore++;
}


if (result2 === "Human wins") {
       humanScore++;
}

else if (result2 === "Tie") {
    tie++;
}
else {
    computerScore++;
}


if (result3 === "Human wins") {
       humanScore++;
}

else if (result3 === "Tie") {
    tie++;
}
else {
    computerScore++;
}

if (result4 === "Human wins") {
       humanScore++;
}

else if (result4=== "Tie") {
    tie++;
}
else {
    computerScore++;
}

console.log ("Human Score: " + humanScore);
console.log("COmputer Score: " + computerScore);
console.log("Tie: " + tie);
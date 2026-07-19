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
let computerScore = 0;
let humanScore = 0;
let tie = 0;

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");


let display = document.createElement("div");
document.body.appendChild(display);

let humanScored = document.createElement("div");
document.body.appendChild(humanScored);
let computerScored = document.createElement("div");
document.body.appendChild(computerScored);

let winner = document.createElement("div");
document.body.appendChild(winner);



    rock.addEventListener("click", (e) => {
    let result = playRound("Rock", getComputerChoice())
    display.textContent = result;

        if (result === "Computer Wins" ) {
        computerScore++;
    }   

    else if (result === "Human wins") {
        humanScore++;
    }

    else {
        tie++;
    }

    if (humanScore >= 5) {
    winner.textContent = "Human dumbass";
    }

    if (computerScore >= 5) {
    winner.textContent = "computer win dumbass";
    }

    computerScored.textContent = "Computer Score: " + computerScore;
    humanScored.textContent = "Human Score: " + humanScore;

    });

    paper.addEventListener("click", (e) => {
        let result = playRound("Paper", getComputerChoice());
        display.textContent = result;

        if (result === "Computer Wins") {
        computerScore++;
    }   

    else if (result === "Human wins") {
        humanScore++;
    }


    else {
        tie++;
    }

    if (humanScore >= 5) {
    winner.textContent = "Human Wins dumbass";
    }

    if (computerScore >= 5) {
    winner.textContent = "Computer Win dumbass";
    }

    computerScored.textContent = "Computer Score: " + computerScore;
    humanScored.textContent = "Human Score: " + humanScore;

    });

    scissor.addEventListener("click", (e) => {
        let result = playRound("Scissor", getComputerChoice());
        display.textContent = result;

    if (result === "Computer Wins") {
        computerScore++;
    }   

    else if (result === "Human wins") {
        humanScore++;
    }

    else {
        tie++;
    }

    if (humanScore >= 5) {
    winner.textContent = "Human Wins"
    }

    if (computerScore >= 5) {
    winner.textContent = "Computer Win"
    }

    computerScored.textContent = "Computer Score: " + computerScore;
    humanScored.textContent = "Human Score: " + humanScore;

    
    });

    







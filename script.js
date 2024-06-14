// allocating the variables to work

let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let drawGames = 0;

let humanSelection = "";
let computerSelection = "";

//creating and setting the html variables
let resultSelection = document.querySelector("#result");
let winner = document.createElement("h1");
let winnerOfRound = document.createElement("h2");
let roundResult = document.createElement("pre");
result.appendChild(winnerOfRound);
result.appendChild(roundResult);
result.appendChild(winner);

// function to get the human choice
function getHumanChoice(choice) {
  humanSelection = choice;
}

// function to choose computer choice
function getComputerChoice() {
  computerSelection = ["rock", "paper", "scissors"];
  computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection === 0){
    computerSelection = "rock";
  }
  else if ( computerSelection === 1 ){
    computerSelection = "paper";
  }
  else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

// game starts here
function playRound(humanChoice, computerChoice) {
  if ( humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) { 
    humanScore++;
    winnerOfRound.textContent = "User win this round!!!";
  }
  else if (humanChoice === computerChoice) {
    drawGames++;
    winnerOfRound.textContent = "Tie...";
  } 
  else{
    computerScore++;
    winnerOfRound.textContent = "Computer win this round!!!";
  }
  gamesPlayed++;

  winner.textContent = getWinner();
    roundResult.textContent = `Draw: ${drawGames}\nUser: ${humanSelection}. Score: ${humanScore}\nComputer: ${computerSelection}. Score: ${computerScore}\nGames played: ${gamesPlayed}`;
}

function getWinner() {
  if (humanScore !== 0 || computerScore !== 0){
    if (humanScore === computerScore) {
      return "Match ties..."
    }
    return humanScore > computerScore ? "User is the winner!" : "computer is the winner!";
  }
}


//creating the eventListener
let buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    getHumanChoice(e.target.id);
    getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});

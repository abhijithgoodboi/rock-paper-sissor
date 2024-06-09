console.log("Lets play the game");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  let computerChoice = "rock";

  computerChoice = Math.floor(Math.random() * 3);
  if ( computerChoice === 0 ) {
    computerChoice = "rock";
  }
  else if( computerChoice === 1){
    computerChoice = "paper";
  }
  else {
    computerChoice = "scissors";
  }

  return computerChoice;
}


function getHumanChoice() {
  let humanChoice = "rock";

  humanChoice = prompt("Enter your choice: Rock, Paper or scissors");
  humanChoice = humanChoice.toLowerCase();

  return humanChoice;
}


function playRound(humanChoice, computerChoice) {
  if( humanChoice == "rock" ){
    if( computerChoice == "rock" ){
      console.log("Match Draw!");
    }
    else if(computerChoice == "paper"){
      console.log(" You lose! Paper beats Rock");
      computerScore += 1;
    }
    else if( computerChoice == "scissors"){
      console.log("You win! Rock beats scissors");
      humanScore += 1;
    }
  }
  else if( humanChoice == "paper"){
    if(computerChoice == "rock"){
      console.log("You win! Paper beats Rock");
      humanScore += 1;
    }
    else if(computerChoice == "paper"){
      console.log("Match Draw!");
    }
    else if(computerChoice == "scissors"){
      console.log("You lose! Scissors beat Paper");
      computerScore += 1;
    }
  }
  else if(humanChoice == "scissors"){
    if(computerChoice == "rock"){
      console.log("You lose! Rock beats Scissors");
      computerScore += 1;
    }
    else if(computerChoice == "paper"){
      console.log("You win! Scissors beats Paper");
      humanScore += 1;
    }
    else if(computerChoice == "scissors"){
      console.log("Match Draw!");
    }
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++){
    console.log("Round " + i);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  
  console.log("----------Score----------");
  console.log("Your Score: " + humanScore);
  console.log("Computer Score: " + computerScore);

  if (humanScore < computerScore) {
    console.log("Computer won the game: " + computerScore + " points.");
  }
  else if(humanScore > computerScore){
    console.log("You won the game with: " + humanScore + " points.");
  }
  else{
    console.log("Match finishes with Draw.");
  }
}

playGame();

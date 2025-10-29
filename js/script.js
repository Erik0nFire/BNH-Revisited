const choices = ["Bear", "Ninja", "Hunter"];
let playerWins = 0;
let computerWins = 0;

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let resultMessage = "";

  if (userChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (userChoice === "Bear" && computerChoice === "Hunter") ||
    (userChoice === "Hunter" && computerChoice === "Ninja") ||
    (userChoice === "Ninja" && computerChoice === "Bear")
  ) {
    resultMessage = "You win!";
    playerWins++;
  } else {
    resultMessage = "The computer wins!";
    computerWins++;
  }

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML =
    `<p>You chose ${userChoice}.</p>
     <p>The computer chose ${computerChoice}.</p>
     <p>${resultMessage}</p>`;
  resultsDiv.style.display = "inline-block";

  document.getElementById("winCounter").innerHTML =
    `Your Wins: ${playerWins}<br>Computer Wins: ${computerWins}`;

  document.getElementById("playAgainSection").innerHTML =
  `<hr>
   <button onclick="resetGame()">Play Again?</button>
   <hr>`;
}

function resetGame() {
  document.getElementById("results").innerHTML = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("winCounter").innerHTML = "";
  document.getElementById("playAgainSection").innerHTML = "";
}

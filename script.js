// Guess the Number
let secretNumber;
let attemptsLeft;
const guessForm = document.querySelector("#guess-form");
const guessInput = document.querySelector("#guess-input");
const guessMessage = document.querySelector("#guess-message");

function startGuessGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 7;
  guessInput.value = "";
  guessMessage.textContent = "You have 7 attempts. Good luck!";
  guessInput.disabled = false;
  guessForm.querySelector("button").disabled = false;
}
guessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const guess = Number(guessInput.value);
  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    guessMessage.textContent = "Enter a whole number from 1 to 100.";
    return;
  }
  attemptsLeft--;
  if (guess === secretNumber) {
    guessMessage.textContent = `Correct! 🎉 The number was ${secretNumber}.`;
    guessInput.disabled = true;
    guessForm.querySelector("button").disabled = true;
  } else if (attemptsLeft === 0) {
    guessMessage.textContent = `Game over! The number was ${secretNumber}.`;
    guessInput.disabled = true;
    guessForm.querySelector("button").disabled = true;
  } else {
    guessMessage.textContent = `${guess < secretNumber ? "Too low" : "Too high"}! ${attemptsLeft} attempt(s) left.`;
  }
});
document.querySelector("#reset-guess").addEventListener("click", startGuessGame);
startGuessGame();

// Rock, Paper, Scissors
let youScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const rpsMessage = document.querySelector("#rps-message");

document.querySelectorAll(".move").forEach((button) => {
  button.addEventListener("click", () => {
    const you = button.dataset.move;
    const computer = choices[Math.floor(Math.random() * choices.length)];
    if (you === computer) {
      rpsMessage.textContent = `It's a draw! You both chose ${you}.`;
    } else if (
      (you === "rock" && computer === "scissors") ||
      (you === "paper" && computer === "rock") ||
      (you === "scissors" && computer === "paper")
    ) {
      youScore++;
      rpsMessage.textContent = `You win! ${you} beats ${computer}.`;
    } else {
      computerScore++;
      rpsMessage.textContent = `Computer wins! ${computer} beats ${you}.`;
    }
    document.querySelector("#you-score").textContent = youScore;
    document.querySelector("#computer-score").textContent = computerScore;
  });
});
document.querySelector("#reset-rps").addEventListener("click", () => {
  youScore = 0;
  computerScore = 0;
  document.querySelector("#you-score").textContent = "0";
  document.querySelector("#computer-score").textContent = "0";
  rpsMessage.textContent = "Score reset. Make your move!";
});

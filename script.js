const options = ["Rock", "Paper", "Scissors"];

function rps(userChoice) {
  const user_input = options.indexOf(userChoice);
  const computer_input = Math.floor(Math.random() * 3);

  const gameResult = document.getElementById("game-result");
  const userImg = document.querySelector(`[data-choice="${userChoice}"]`);
  const computerImg = document.querySelector(`[alt="${options[computer_input]}"]`);

  userImg.classList.add("selected");

  gameResult.innerHTML = `You chose: ${options[user_input]} 
The computer chose: ${options[computer_input]} `;

  if (user_input === computer_input) {
    gameResult.textContent += "\n It's a tie! 👔";
  } else if ((user_input === 0 && computer_input === 2) || (user_input === 1 && computer_input === 0) || (user_input === 2 && computer_input === 1)) {
    gameResult.textContent += "\n You win! 🥳";
  } else {
    gameResult.textContent += "\n You lost! 😭";
  } 
}


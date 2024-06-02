let userscore = 0;
let compscore = 0;

let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

const msg = document.querySelector(".msg");
const choices = document.querySelectorAll(".choice");

const newgame = document.querySelector(".newgm");
newgame.addEventListener("click", () => {
  userScore.innerText = "0";
  compScore.innerText = "0";
  userscore = 0;
  compscore = 0;
});

const drawGame = () => {
  console.log("Game Draw");
  msg.innerText = "Game Draw! Play Again";
  msg.style.backgroundColor = "rgb(10, 10, 15)";
};

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userscore++;
    userScore.innerText = userscore;
    console.log("You Win!");
    msg.innerText = `You Win! , Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScore.innerText = compscore;
    console.log("You Lose!");
    msg.innerText = `You Lose! , Computer's ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomNo = Math.floor(Math.random() * 3);
  return options[randomNo];
};

const playGame = (userChoice) => {
  console.log("user Choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userwin = true;

    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was Clicked!" + userChoice);
    playGame(userChoice);
  });
});

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset-btn");
let newgamebtn = document.querySelector("#newgame");
let msgwin = document.querySelector(".msgwin");
let msg = document.querySelector("#msg");

let turnO = true;
const resetGame = () => {
  let turnO = true;
  enableBoxes();
  msgwin.classList.add("hide");
};

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was clicked!");
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations ! Winner is ${winner}`;
  msgwin.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log("Winner", posVal1);
        showWinner(posVal1);
      }
    }
  }
};
newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

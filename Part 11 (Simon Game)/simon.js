let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highestScore = 0; 
let h3 = document.querySelector("h3");
let h1 = document.querySelector("h1");
let btns = ["red", "green", "blue", "pink"];
let body = document.querySelector("body");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started!");
        started = true;
        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    body.style.backgroundColor = "yellow";
    setTimeout(() => {
        body.style.backgroundColor = "white";
    }, 150);

    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameFlash(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
}


function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 400);

        }
    } else {
        h3.innerHTML = `Game Over! Your Score was <b>${level} </b><br> Please Enter any key to Restart:`;
        
        
        if(level>highestScore){
            highestScore=level;
            h1.innerHTML=`Simon Says Game. Highest Score is<b> ${highestScore}</b>`
        }
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "white";
        }, 150);
        reset();

        
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    //  console.log(userSeq);
    checkAns(userSeq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    console.log("game over!");
    started = false;
    userSeq = [];
    gameSeq = []; 
    level = 0;
}
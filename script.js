let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");
let newGameBtn = document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let movecount = 0;
 let xScore = 0;
 let oScore = 0;
 const xScoreBoard = document.querySelector("#x-score");
 const oScoreBoard = document.querySelector("#o-score");

const changeBoxColors = () =>{
    boxes.forEach(box => {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        box.style.backgroundColor = randomColor;
    });
};

changeBoxColors();

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Reset Game Function
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    movecount = 0;
    changeBoxColors();
};

// Disable All Boxes After Win
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};



// Enable All Boxes (for reset/new game)
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "⭕";
            turnO = false;
        } else {
            box.innerText = "❌";
            turnO = true;
        }
        // turnO =!turnO;
        box.disabled = true;
        movecount++;   //increase value
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    let iswinner = false;
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
               
            }
        }
    }
    if (!iswinner && movecount === 9){
        msg.innerText = "game draw❌";
        msgContainer.classList.remove("hide");
    }
 iswinner = true;
 if (winner === "❌"){
    oScore++;
    xScoreBoard.innerText = xScore;
 } else {
    oScore++;
    oScoreBoard.innerText = oScore;
 }
 disableBoxes();
};


// Button Events
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

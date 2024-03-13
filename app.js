let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newBtn = document.getElementById("new");
let messageArea = document.querySelector('.message');
let winnerMsg = document.querySelector('#winner');


let turn0 = true; // playerX, player0
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         box.innerHTML = (turn0)? 'X':'0';
//         turn0 = !turn0;
//         box.disabled = true;
//         box.classList.add('box'+box.innerHTML)
//         checkWinner();
//     });
// });

const clickedOnBox = (box) => {
    box.innerHTML = (turn0)? 'X':'0';
    turn0 = !turn0;
    box.disabled = true;
    box.classList.add('box'+box.innerHTML);
    checkWinner();
}

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        if(pos1Value != '' && pos2Value != '' && pos3Value != ''){
            if(pos1Value === pos2Value && pos2Value === pos3Value) {
                showWinnner(pos1Value);
                return;
            }
        }
    }
}

const showWinnner = (winner) => {
    winnerMsg.innerText = `Congratulations, The winner is ${winner}!`;
    messageArea.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = '';
        box.classList.remove("box0", "boxX");
    }
}

const resetGame = () => {
    enableBoxes();
    winnerMsg.innerHTML = '';
    messageArea.classList.add("hide");
}

resetBtn.addEventListener('click', resetGame);
newBtn.addEventListener('click', resetGame);

document.getElementById('viewOldGame').addEventListener('click', function() {
    document.getElementById('viewGame').scrollIntoView({ behavior: 'smooth' });
});
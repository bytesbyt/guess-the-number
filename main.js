let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => {
    userInput.value = "";
});

function pickRandomNumber () {
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("computer number is",computerNum);
}
function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100){
        resultArea.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (history.includes(userValue)){
        resultArea.textContent = "You already tried that number.";
        return;
    }

    chances -- ;
    chanceArea.textContent = `Remaining chances: ${chances}`;

    if (userValue < computerNum){
        resultArea.textContent = "Up!!";    
    } else if (userValue > computerNum){
        resultArea.textContent = "Down!!";
    } else {
        resultArea.textContent = "You won!!";
        gameOver = true;
    }
    history.push(userValue);

    if (chances < 1){
        gameOver = true;
    }
    if (gameOver == true) {
        playButton.disabled = true;
    }

}
function reset() {
    userInput.value = "";
    gameOver = false;
    chances = 5;
    chanceArea.textContent = `Remaining chances: ${chances}`;
    playButton.disabled = false;
    history = [];
    pickRandomNumber();

    resultArea.textContent = "결과값이 여기에 나옵니다.";
}

pickRandomNumber();
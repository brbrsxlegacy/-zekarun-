let op = "+";
let a, b;
let score = 0;
let time = 60;
let timer;

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");

function startGame(operation) {
    op = operation;
    score = 0;
    time = 60;
    scoreEl.textContent = "Skor: 0";
    timeEl.textContent = time;

    menu.classList.remove("active");
    game.classList.add("active");

    newQuestion();
    answer.value = "";
    answer.focus();

    clearInterval(timer);
    timer = setInterval(() => {
        time--;
        timeEl.textContent = time;
        if (time <= 0) endGame();
    }, 1000);
}

function newQuestion() {
    a = rand();
    b = rand();

    if (op === "/") {
        a = a * b;
    }

    question.textContent = `${a} ${op} ${b} = ?`;
}

function checkAnswer() {
    let correct;
    switch (op) {
        case "+": correct = a + b; break;
        case "-": correct = a - b; break;
        case "*": correct = a * b; break;
        case "/": correct = a / b; break;
    }

    if (Number(answer.value) === correct) {
        score++;
        scoreEl.textContent = "Skor: " + score;
    }

    answer.value = "";
    newQuestion();
}

function endGame() {
    clearInterval(timer);
    alert("Süre bitti! Skor: " + score);
    goMenu();
}

function goMenu() {
    clearInterval(timer);
    game.classList.remove("active");
    menu.classList.add("active");
}

function rand() {
    return Math.floor(Math.random() * 10) + 1;
}

answer.addEventListener("keydown", e => {
    if (e.key === "Enter") checkAnswer();
});

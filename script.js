let operator;
let correctAnswer;

function startGame(op) {
    operator = op;
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").classList.remove("hidden");
    newQuestion();
}

function newQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    if (operator === "/") {
        a = a * b; // tam bölünsün diye
    }

    document.getElementById("question").innerText =
        a + " " + operator + " " + b + " = ?";

    switch (operator) {
        case "+": correctAnswer = a + b; break;
        case "-": correctAnswer = a - b; break;
        case "*": correctAnswer = a * b; break;
        case "/": correctAnswer = a / b; break;
    }

    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

function checkAnswer() {
    let userAnswer = Number(document.getElementById("answer").value);

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "Doğru 🎉";
        newQuestion();
    } else {
        document.getElementById("result").innerText = "Yanlış ❌";
    }
}

function exitGame() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("game").classList.add("hidden");
}

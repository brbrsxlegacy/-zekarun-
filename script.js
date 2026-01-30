let op, a, b;
let score = 0;
let time = 60;
let timer;

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const q = document.getElementById("q");
const inp = document.getElementById("inp");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");

function start(o) {
  op = o;
  score = 0;
  time = 60;
  scoreEl.textContent = score;
  timeEl.textContent = time;

  menu.style.display = "none";
  game.style.display = "flex";

  next();
  inp.value = "";
  inp.focus();

  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;
    if (time <= 0) finish();
  }, 1000);
}

function next() {
  a = rand();
  b = rand();
  if (op === "/") a = a * b;
  q.textContent = `${a} ${op} ${b}`;
}

function check() {
  let correct;
  if (op === "+") correct = a + b;
  if (op === "-") correct = a - b;
  if (op === "*") correct = a * b;
  if (op === "/") correct = a / b;

  if (Number(inp.value) === correct) {
    score++;
    scoreEl.textContent = score;
  }

  inp.value = "";
  next();
}

function finish() {
  clearInterval(timer);
  alert("Bitti! Skor: " + score);
  back();
}

function back() {
  clearInterval(timer);
  game.style.display = "none";
  menu.style.display = "flex";
}

function rand() {
  return Math.floor(Math.random() * 9) + 1;
}

inp.addEventListener("keydown", e => {
  if (e.key === "Enter") check();
});

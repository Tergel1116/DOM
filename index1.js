const timerDisplay = document.getElementById("timer");

const startBtn = document.getElementById("start");

const stopBtn = document.getElementById("stop");

const resetBtn = document.getElementById("reset");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function initializeButtons() {
  startBtn.classList.remove("disabled"); // Start идэвхтэй
  stopBtn.classList.add("disabled"); // Stop идэвхгүй
  resetBtn.classList.add("disabled"); // Reset идэвхгүй
}

initializeButtons();

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }

  startBtn.classList.add("disabled");
  stopBtn.classList.remove("disabled");
  resetBtn.classList.remove("disabled");
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
  startBtn.classList.remove("disabled");
  stopBtn.classList.add("disabled");
  resetBtn.classList.remove("active");
}
function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  timerDisplay.textContent = "00:00:00";

  startBtn.classList.remove("disabled");
  stopBtn.classList.remove("disabled");
  resetBtn.classList.add("disabled");
  stopBtn.classList.add("disabled");
}
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

  let second = Math.floor((elapsedTime / 1000) % 60);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  second = String(second).padStart(2, "0");

  timerDisplay.textContent = `${hours}:${minutes}:${second}`;
}

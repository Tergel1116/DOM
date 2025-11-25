const timerDisplay = document.getElementById("timer");

const startBtn = document.getElementById("start");

const stopBtn = document.getElementById("stop");

const resetBtn = document.getElementById("reset");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}
start();
function stop() {}
function reset() {}
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
}

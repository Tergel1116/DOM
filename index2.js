const display = document.getElementById("result");

function appendToDisplay(value) {
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = "";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = display.innerText;
  }
}

const inputAmount = document.getElementById("input1");

const resultAmount = document.getElementById("result");

const resetButton = document.getElementById("reset");

const calculateTip = (percent) => {
  const bill = Number(inputAmount.value);
  if (!bill || isNaN(bill) || Number(bill) <= 0) {
    alert("Please enter a bill amount");
    return;
  }
  const tip = (bill * percent) / 100;
  const last = bill + tip;
  resultAmount.innerText = last + ".00";
};

const reset = () => {
  inputAmount.value = 0;
  resultAmount.innerText = "0.00";
};

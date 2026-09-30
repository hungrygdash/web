let currentInput = "0";
let previousInput = null;
let operator = null;

const display = document.getElementById("display");

function updateDisplay() {
    display.textContent = currentInput;
}

function pressNum(num) {
    if (currentInput === "0") {
        currentInput = String(num);
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function setOperator(op) {
    previousInput = parseFloat(currentInput);
    operator = op;
    currentInput = "0";
}

function clearAll() {
    currentInput = "0";
    previousInput = null;
    operator = null;
    updateDisplay();
}

function calculate() {
    if (operator === null || previousInput === null) return;

     const current = parseFloat(currentInput);
     let result;

     if (operator === "+") {
        result = previousInput + current;
     } else if (operator === "-") {
        result = previousInput - current;
     } else if (operator === "x") {
        result = previousInput * current;
     } else if (operator === "/") {
        result = previousInput / current;
     }
     currentInput = String(result);
     operator = null;
     previousInput = null;
     updateDisplay();
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        return 'Error! Division by zero is undefined';
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function updateDisplay(value) {
    const displayElement = document.getElementById("display");
    
    // Reset styles
    displayElement.style.color = "black";
    displayElement.style.fontWeight = "normal";

    // Handle errors
    if (value === "Error" || isNaN(value)) {
        displayElement.textContent = "Error";
        displayElement.style.color = "red";
        displayElement.style.fontWeight = "bold";
    } else {
        displayElement.textContent = value;
    }
}

let numButtons = document.getElementsByClassName("numButton");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", function() {
    if(operator == "") {
      firstNumber += this.textContent;
      updateDisplay(firstNumber);
    } else {
      secondNumber += this.textContent;
      updateDisplay(secondNumber);
    }
    });
}

let eqButton = document.getElementsByClassName("eqButton")[0];
eqButton.addEventListener("click", function() {
  result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
  updateDisplay(result);
})

let clearButton = document.getElementsByClassName("clearButton")[0];
clearButton.addEventListener("click", function() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
  updateDisplay("");
})
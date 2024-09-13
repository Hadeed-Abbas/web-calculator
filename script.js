// Html Element Selection
const numbersOps = document.querySelector(".numbers-operators");
const container = document.querySelector(".container");
const cross = document.querySelector(".cross");
const sign = document.querySelector(".plus-minus");
const eraseAll = document.querySelector(".eraseAll");
const percentage = document.querySelector(".percentage");

// Global Variables
let leftOperand = "";
let operator = "";
let rightOperand = "";
let result = "";
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operatorArray = ['+', '-', '*', '/'];

//Functions
const performCalculation = (leftOp, op, rightOp) => {
    if (!leftOp || !rightOp || !op) {
        alert("Cannot Perform Calculation yet.");
        return false;
    }
    const left = parseInt(leftOp);
    const right = parseInt(rightOp);
    switch (op) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return right === 0 ? true : left / right;
        default: return;
    }
};

const updateDisplay = (value) => {
    container.innerText = value || "0";
};

const operate = () => {
    result = performCalculation(leftOperand, operator, rightOperand);
    if (result === false) return;
    if (result === true) return; 
    leftOperand = result.toString();
    rightOperand = "";
    operator = "";
    updateDisplay(result);
};

// Event Listeners
numbersOps.addEventListener('click', (event) => {
    const target = event.target;
    if (numberArray.includes(Number(target.innerText))) {
        if (!operator) {
            leftOperand += target.innerText;
            updateDisplay(leftOperand);
        } else {
            rightOperand += target.innerText;
            updateDisplay(rightOperand);
        }
    } else if (operatorArray.includes(target.innerText)) {
        if (operator && rightOperand) operate();
        operator = target.innerText;
    } else if (target.innerText === "=") {
        operate();
    }
});

eraseAll.addEventListener('click', () => {
    leftOperand = rightOperand = operator = "";
    updateDisplay("0");
});

sign.addEventListener('click', () => {
    if (!operator) {
        leftOperand = leftOperand.startsWith("-") ? leftOperand.slice(1) : `-${leftOperand}`;
        updateDisplay(leftOperand);
    } else {
        operator = operator === "+" ? "-" : "+";
    }
    if (rightOperand) {
        rightOperand = rightOperand.startsWith("-") ? rightOperand.slice(1) : `-${rightOperand}`;
        updateDisplay(rightOperand);
    }
});

cross.addEventListener('click', () => {
    if (!rightOperand) {
        leftOperand = leftOperand.slice(0, -1);
        updateDisplay(leftOperand);
    } else if (leftOperand === result) {
        updateDisplay(result);
    } else {
        rightOperand = rightOperand.slice(0, -1);
        updateDisplay(rightOperand);
    }
});

percentage.addEventListener('click', () => {
    result = performCalculation(leftOperand, "/", "100");
    leftOperand = result.toString();
    rightOperand = "";
    operator = "";
    updateDisplay(result);
});

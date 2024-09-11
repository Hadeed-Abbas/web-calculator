// Html Element Selection
let numbersOps = document.querySelector(".numbers-operators");
let container = document.querySelector(".container");
let cross = document.querySelector(".cross");
let sign = document.querySelector(".plus-minus");
let eraseAll = document.querySelector(".eraseAll");
let percentage = document.querySelector(".percentage");

// Global Variables
let leftOperand = "";
let operator = "";
let rightOperand = "";
let result = ``;
const numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operatorarray = ['+', '-', '*', '/'];

// Functions to perform Calculations
function performCalculation(leftOp, op, rightOp) {
    if (leftOp === "" || rightOp === "" || op === "") {
        alert("Cannot Perform Calculation yet.");
        return false;
    }
    let left = parseInt(leftOp);
    let right = parseInt(rightOp);
    let result = "";
    switch (op) {
        case '+':
            result = performAddition(left, right);
            break;
        case '-':
            result = performSubtraction(left, right);
            break;
        case '*':
            result = performMultiplication(left, right);
            break;
        case '/':
            result = performDivision(left, right);
            break;
        default:
            break;
    }
    return result;
}

const performAddition = (left, right) => {
    return left + right;
};

const performSubtraction = (left, right) => {
    return left - right;
};

const performMultiplication = (left, right) => {
    return left * right;
}

const performDivision = (left, right) => {
    if (right === 0) {
        return true;
    }
    return left / right;
};

// Event Listeners
numbersOps.addEventListener('click', (event) => {
    let target = event.target;


    numberarray.forEach(num => {
        if (num == target.innerText) {
            if (operator === "" && rightOperand === "") {
                leftOperand = `${leftOperand + target.innerText}`;
                container.innerText = leftOperand;
            }
            else {
                rightOperand = `${rightOperand + target.innerText}`;
                container.innerText = rightOperand;
            }
        }
    });

    operatorarray.forEach(op => {
        if (op == target.innerText) {
            operator = `${target.innerText}`;
        }
    })

    if (target.innerText === "=") {

        result = performCalculation(leftOperand, operator, rightOperand);
        if (result === false) {
            return;
        }
        else if (result === true) {
            return;
        }
        leftOperand = result.toString();
        rightOperand = "";
        operator = "";
        container.innerText = result;
    }
});

eraseAll.addEventListener('click', () => {
    leftOperand = rightOperand = operator = "";
    container.innerText = "0";
});

sign.addEventListener('click', () => {
    if (rightOperand === "" && operator === "") {
        let sign = "-";
        if (leftOperand[0] === "-") {
            leftOperand[0] = "0";
        }
        else {
            newLeft = sign + leftOperand;
            leftOperand = newLeft;
        }
        container.innerText = leftOperand;
    }
    else if (operator === "+") {
        operator = "-";
    }
    else {
        let sign = "-";
        if (rightOperand[0] === "-") {
            rightOperand[0] = "0";
        }
        else {
            newright = sign + rightOperand;
            rightOperand = newright;
        }
        container.innerText = rightOperand;
    }
});

cross.addEventListener('click', () => {
    if (rightOperand === "") {
        let revisedLeftOperand = "";

        for (let i = 0; i < leftOperand.length - 1; i++) {
            revisedLeftOperand += leftOperand[i];
        }

        leftOperand = revisedLeftOperand;
        container.innerText = leftOperand;
    }
    else if (leftOperand === result) {
        document.innerText = result;
    }
    else {
        let revisedRightOperand = "";

        for (let i = 0; i < rightOperand.length - 1; i++) {
            revisedRightOperand += rightOperand[i];
        }

        rightOperand = revisedRightOperand;
        container.innerText = rightOperand;
    }


});

percentage.addEventListener('click', () => {
    result = performCalculation(leftOperand, "/", "100");
    leftOperand = result.toString();
    rightOperand = "";
    operator = "";
    container.innerText = result;
});
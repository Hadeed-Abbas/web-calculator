let leftOperand = "";
let operator = "";
let rightOperand = "";
let result = ``;


let numbersOps = document.querySelector(".numbers-operators");
let container = document.querySelector(".container");

const numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const operatorarray = ['+', '-', '*', '/'];

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
        if(result===false){
            return;
        }
        else if(result === true){
            return;
        }
        leftOperand = result;
        rightOperand = "";
        operator = "";
        container.innerText = result;
    }


});

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

const performDivision = (left, right) =>{
    if(right === 0){
        return true;
    }
    return left / right;
};
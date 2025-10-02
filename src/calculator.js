// OPERATORI
let firstOperand;
let operator;
let secondOperand;

// BASIC OPERATION
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}


function operate(firstOperand, secondOperand, operator){
    switch(operator) {
        case '+':
            return add(firstOperand, secondOperand);
        case '-':
            return substract(firstOperand, secondOperand);
        case '*':
            return multiply(firstOperand, secondOperand);
        case '/':
            return divide(firstOperand, secondOperand);
        default:
            return null;
    }
}

// funzione per "smistare gli event listener e i clicl"
function handleNumberClick(){
    console.log('diocane');
}
function handleOperatorClick(){

}
function handleClearClick(){

}
function handleEqualClick(){

}

function initCalculator(){
    const buttons = document.querySelectorAll('button');
    const display = document.querySelector('#display');

    buttons.forEach((button) => {
        if (button.dataset.type === 'number')
            button.addEventListener('click', handleNumberClick());
        if (button.dataset.type === 'operator')
            button.addEventListener('click' , handleOperatorClick());
        if (button.dataset.type === 'clear')
            button.addEventListener('click', handleClearClick());
        if (button.dataset.type === 'equals')
            button.addEventListener('click', handleEqualClick());
    });
    
}

initCalculator();
module.exports = { add, substract, multiply, divide, operate ,initCalculator };

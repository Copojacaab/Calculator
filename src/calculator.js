// OPERATORI
let firstOperand = '';
let operator = '';
let secondOperand = '';

// VALORE DA MOSTRARE SU DISPLAY
let displayText = '';

// BASIC OPERATION
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(firstOperand, secondOperand, operator) {
    const a = Number(firstOperand);
    const b = Number(secondOperand);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

function handleNumberClick(event) {
    const nuovoNumero = event.target.textContent;
    if (!operator) {
        firstOperand += nuovoNumero;
        displayText = firstOperand;
    } else {
        secondOperand += nuovoNumero;
        displayText = secondOperand;
    }
    updateDisplay(displayText);
}

function handleOperatorClick(event) {
    if (!operator) {
        operator = event.target.textContent;
        secondOperand = '';  // reset del secondo operando all'inizio
        displayText = operator;
    }
    updateDisplay(displayText);
}

function handleClearClick() {
    firstOperand = '';
    operator = '';
    secondOperand = '';
    displayText = '';
    updateDisplay(displayText);
}

function handleEqualClick() {
    if (firstOperand !== '' && operator && secondOperand !== '') {
        const result = operate(firstOperand, secondOperand, operator);
        firstOperand = result.toString();
        operator = '';
        secondOperand = '';
    }
    // con l'uguale devo mostrare a schermo il risultato dell'operazione
    
}

function initCalculator() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        if (button.dataset.type === 'number')
            button.addEventListener('click', handleNumberClick);
        else if (button.dataset.type === 'operator')
            button.addEventListener('click', handleOperatorClick);
        else if (button.dataset.type === 'clear')
            button.addEventListener('click', handleClearClick);
        else if (button.dataset.type === 'equals')
            button.addEventListener('click', handleEqualClick);
    });
}

function updateDisplay(value){
    const display = document.querySelector('#display');
    if(display){
        display.textContent = value;
    }
}

// Funzione per resettare lo stato, da chiamare nei test
function resetCalculator() {
    firstOperand = '';
    operator = '';
    secondOperand = '';
}

function getFirstOperand() {
    return firstOperand;
}

function getSecondOperand() {
    return secondOperand;
}

function getOperator() {
    return operator;
}

initCalculator();

module.exports = {
    add,
    substract,
    multiply,
    divide,
    operate,
    initCalculator,
    getFirstOperand,
    getSecondOperand,
    getOperator,
    resetCalculator,
};

// OPERATORI
let firstOperand = '';
let operator = '';
let secondOperand = '';

// VALORE DA MOSTRARE SU DISPLAY
let displayText = '';

// FLAG PER OPERAZIONE CONCATENATA
let readyForChain = false;

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
    if (b === 0){
        return 'Errore';
    }
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

function addDecimalToStr(str){
  if(str.includes('.'))
    return str;
  else 
    return str + '.';
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

function handleDecimalCLick(event){
  // check se lavoro su first o su second
  if(!operator){
    firstOperand = addDecimalToStr(firstOperand);
    displayText = firstOperand;
  } else {
    secondOperand = addDecimalToStr(secondOperand);
    displayText = secondOperand;
  }
  updateDisplay(displayText);
}

function handleOperatorClick(event) {
  const nuovoOperatore = event.target.textContent;
  if (!operator) {
    operator = nuovoOperatore;
    secondOperand = ''; // reset del secondo operando all'inizio
    displayText = operator;
  } else if (secondOperand != '') {
    // controllo per divisione per 0
    const result = operate(firstOperand, secondOperand, operator);

    if (result === 'Errore'){
        firstOperand = '';
        operator = '';
        displayText = 'Errore';
    } else {
        firstOperand = result.toString();
        operator = nuovoOperatore;
        secondOperand = '';
        displayText = firstOperand + ' ' + operator.toString();
    }
  } else {
    displayText = operator;
    operator = nuovoOperatore;
  }
  updateDisplay(displayText);
}

function handleBackspaceClick(){
  // check per capire se sono su first o su second
  if (!operator){
    firstOperand = firstOperand.slice(0, -1);
    displayText = firstOperand;
  } else {
    secondOperand = secondOperand.slice(0,-1);
    displayText = secondOperand;
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

    if(result === 'Errore'){
        firstOperand = '';
        displayText = result;
    }else {
        firstOperand = result.toString();
        displayText = result.toString();
    }
    operator = '';
    secondOperand = '';
    // con l'uguale devo mostrare a schermo il risultato dell'operazione
    updateDisplay(displayText);
  }
}

function initCalculator() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    if (button.dataset.type === 'number')
      button.addEventListener('click', handleNumberClick);
    else if (button.dataset.type === 'operator')
      button.addEventListener('click', handleOperatorClick);
    else if (button.dataset.type === 'decimal')
        button.addEventListener('click', handleDecimalCLick);
    else if (button.dataset.type === 'backspace')
        button.addEventListener('click', handleBackspaceClick);
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
  displayText = '';
  updateDisplay(displayText);
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

function getDisplayText(){
  return displayText;
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
  getDisplayText,
  resetCalculator,
};

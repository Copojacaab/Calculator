/**
 * @jest-environment jsdom
 */

const {
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
} = require('../src/calculator.js');

beforeEach(() => {
  resetCalculator(); // resetta lo stato per ogni test
  document.body.innerHTML = `
    <div id="btnContainer">
        <button data-type="number">1</button>
        <button data-type="operator">+</button>
        <button data-type="number">2</button> 
        <button data-type="clear">C</button>
        <button data-type="equals">=</button>
        <button data-type="operator">/</button>
        <button data-type="number">0</button>
    </div>
  `;
  initCalculator();
});

test('add 2+3 equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('substract: 5-3 equal 2', () => {
  expect(substract(5, 3)).toBe(2);
});

test('multiply: 4 * 2 equal 8', () => {
  expect(multiply(4, 2)).toBe(8);
});

test('divide: 4/2 equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});

test('operate: 2+3 equal 5', () => {
  expect(operate(2, 3, '+')).toBe(5);
});

test('operate: 3-2 equal 1', () => {
  expect(operate(3, 2, '-')).toBe(1);
});

test('operate: 2*2 equal to 4', () => {
  expect(operate(2, 2, '*')).toBe(4);
});

test('operate: 4/2 equal 2', () => {
  expect(operate(4, 2, '/')).toBe(2);
});

test('cliccando un numero agiorna firstOperand', () => {
  const buttons = document.querySelectorAll('button[data-type="number"]');
  buttons[0].click();

  expect(getFirstOperand()).toBe('1');
});

test('cliccando un operatore aggiorna operator', () => {
  const button = document.querySelector('button[data-type="operator"]');
  button.click();

  expect(getOperator()).toBe('+');
});

test('cliccando un operatore e poi un numero modifica second operator', () => {
  const buttons = document.querySelectorAll('button');
  buttons[0].click(); // 1
  buttons[1].click(); // +
  buttons[2].click(); // 2
  buttons[2].click();

  expect(getSecondOperand()).toBe('22');
});

// DISPLAY
test('aggiornamento firstOperand su display', () => {
  const buttons = document.querySelectorAll('button[data-type="number"]');
  buttons[0].click(); //1
  expect(getDisplayText()).toBe("1");

  buttons[0].click();
  expect(getDisplayText()).toBe("11");
});

test('aggiornamento operator su display', () => {
  const button = document.querySelector('button[data-type="operator"]');
  button.click(); //+
  expect(getDisplayText()).toBe('+');

  button.click(); // operator-->operator = not allowed
  expect(getDisplayText()).toBe('+');
});

test('aggiornamento secondOperator su display', () => {
  const buttons = document.querySelectorAll('button');
  //buttons[0].click(); // 1
  buttons[1].click(); // +
  buttons[2].click(); // 2
  expect(getDisplayText()).toBe("2");

  buttons[0].click();
  expect(getDisplayText()).toBe("21");
});

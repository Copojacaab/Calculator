/**
 * @jest-environment jsdom
 */

// TEST PER LE FUNZIONI DI CALCOLO BASE

const { add, substract, multiply, divide, operate } = require('../src/calculator.js');

test('add 2+3 equal 5', () => {
    expect(add(2,3)).toBe(5);
});
test('substract: 5-3 equal 2', () => {
    expect(substract(5,3)).toBe(2);
});
test('multiply: 4 * 2 equal 8', () => {
    expect(multiply(4,2)).toBe(8);
});
test('divide: 4/2 equal 2', () => {
    expect(divide(4,2)).toBe(2);
});

// TEST OPERATE
test('operate: 2+3 equal 5', () => {
    expect(operate(2,3,'+')).toBe(5);
});
test('operate: 3-2 equal 1',  () => {
    expect(operate(3,2,'-')).toBe(1);
})
test('operate: 2*2 equal to 4', () => {
    expect(operate(2,2,'*')).toBe(4);
});
test('operate: 4/2 equal 2', () => {
    expect(operate(4,2,'/')).toBe(2);
})

// TEST INITCALCULATOR
const { initCalculator } = require('../src/calculator.js');

beforeEach(() => {
  document.body.innerHTML = ` 
    <div id="btnContainer">
        <button data-type="number">1</button>
        <button data-type="operator">+</button>
        <button data-type="number">2</button> 
  `;
//   reinizializza la calcolatrice e lo stato
    initCalculator();
});

test ('cliccando un numero agiorna firstOperand', () => {
    const buttons = document.querySelectorAll(' button[data-type="number"]');
    buttons[0].click();
    
    const { getFirstOperand } = require('../src/calculator.js');
    expect(getFirstOperand()).toBe('1');
});

test ('cliccando un operatore aggiorna operator', () => {
    const button = document.querySelector('button[data-type="operator"');
    button.click();

    const { getOperator } = require('../src/calculator.js');
    expect(getOperator()).toBe('+');
})

test ('cliccando un operatore e poi un numero modifica second operator', () => {
    const buttons = document.querySelectorAll('button');
    buttons[0].click();
    buttons[1].click();
    buttons[2].click();
})
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
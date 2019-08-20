var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // calculator.add() - add 1 to 4 and get 5=
  it('can add two numbers', function() {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(5, calculator.runningTotal);
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('can subtract two numbers', function() {
    calculator.numberClick(9);
    calculator.operatorClick("-");
    calculator.numberClick(8);
    calculator.operatorClick("=");
    assert.equal(1, calculator.runningTotal);
  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('can multiply two numbers', function() {
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick("4");
    calculator.operatorClick("=");
    assert.equal("8", calculator.runningTotal);
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('can divide two numbers', function() {
    calculator.numberClick(9);
    calculator.operatorClick("/");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(3, calculator.runningTotal);
  })

  // calculator.numberClick() - concatenate multiple number button clicks
  it('can handle multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(9);
    calculator.numberClick(0);
    assert.equal(190, calculator.runningTotal);
  })

  // calculator.operatorClick() - chain multiple operations together
  it('can chain multiple operations together', function() {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.operatorClick(2);
    calculator.operatorClick("=")
    assert.equal(16, calculator.runningTotal);
  })

  // calculator.clearClick() - clear the running total without affecting the calculation
  it('can clear the running total without affecting the calculation', function() {
    calculator.numberClick(6)
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.operatorClick("+");
    calculator.numberClick(1);
    calculator.operatorClick("=");
    assert.equal(10, calculator.previousTotal);
  })

});

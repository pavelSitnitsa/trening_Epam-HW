class Calculator {
  add(a, b) {
    return (this.res = a + b);
  }
  multiplay(a, b) {
    return (this.res = a * b);
  }
}

const calculator = new Calculator(0);
calculator.add(5, 5);
calculator.multiplay(5, 5);

module.exports = { Calculator };

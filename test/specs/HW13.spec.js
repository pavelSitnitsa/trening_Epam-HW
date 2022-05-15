const { Calculator } = require("../../HW13/calculator.js");
const chai = require("chai");
const { expect } = require("chai");

describe("testind calculator", () => {
  beforeEach(() => {
    calculator = new Calculator();
  });
  it("should return 10, when called wuth nimbers 5 and 5", () => {
    expect(calculator.add(5, 5)).to.be.equal(10);
  });
  it("should return 25, when called wuth nimbers 5 and 5", () => {
    expect(calculator.multiplay(5, 5)).to.be.equal(25);
  });
});

import {amount, disabilityAmount} from "../../src/chap10/consolidate-conditional-expression.js";
import {expect} from "chai";

describe('consolidate-conditional-expression', () => {
  it('disabilityAmount', () => {
    let employee = {
      seniority: 3,
      monthsDisabled: 10,
      isPartTime: false,
    }
    expect(disabilityAmount(employee)).to.equal(1);
    employee = {
      seniority: 1,
      monthsDisabled: 10,
      isPartTime: false,
    }
    expect(disabilityAmount(employee)).to.equal(0);
    employee = {
      seniority: 3,
      monthsDisabled: 13,
      isPartTime: false,
    }
    expect(disabilityAmount(employee)).to.equal(0);
    employee = {
      seniority: 3,
      monthsDisabled: 10,
      isPartTime: true,
    }
    expect(disabilityAmount(employee)).to.equal(0);
  });
  it('amount', () => {
    let employee = {
      seniority: 11,
      onVacation: true,
    }
    expect(amount(employee)).to.equal(1);
    employee = {
      seniority: 9,
      onVacation: true,
    }
    expect(amount(employee)).to.equal(0.5);
    employee = {
      seniority: 11,
      onVacation: false,
    }
    expect(amount(employee)).to.equal(0.5);
  });
});

import {Department, Employee, Party} from "../../src/chap12/pull-up-method.js";
import {expect} from "chai";

describe('pull-up-method', () => {
  it('', () => {
    expect(new Department().totalAnnualCost).to.equal(12);
    expect(new Employee().annualCost).to.equal(12);
    expect(new Party().monthlyCost).to.equal(1);
  });
});

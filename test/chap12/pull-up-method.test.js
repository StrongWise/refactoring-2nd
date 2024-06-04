import {Department, Employee, Party} from "../../src/chap12/pull-up-method.js";
import {expect} from "chai";

describe('pull-up-method', () => {
  it('', () => {
    expect(new Department().annualCost).to.equal(12);
    expect(new Employee().annualCost).to.equal(12);
    expect(new Department().monthlyCost).to.equal(1);
    expect(new Employee().monthlyCost).to.equal(1);
    // expect(new Party().monthlyCost).to.equal(1);
  });
});

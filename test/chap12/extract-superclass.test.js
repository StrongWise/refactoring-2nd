import {Department, Employee} from "../../src/chap12/extract-superclass.js";
import {expect} from "chai";

describe('extract-superclass', () => {
  it('employee cost', () => {
    const employee = new Employee('a', 1, 100);
    expect(employee.monthlyCost).to.equal(100);
    expect(employee.annualCost).to.equal(1200);
  });

  it('department total cost', () => {
    const staff = [new Employee('a',1,100),new Employee('b',2,80)]
    const department = new Department('b', staff);
    expect(department.totalMonthlyCost).to.equal(180);
    expect(department.totalAnnualCost).to.equal(2160);
    expect(department.headCount).to.equal(2);
  });
});

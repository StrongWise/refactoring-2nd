import {Department, Employee} from "../../src/chap12/extract-superclass.js";
import {expect} from "chai";

describe('extract-superclass', () => {
  it('employee cost', () => {
    const employee = new Employee('staff1', 1, 100);
    expect(employee.monthlyCost).to.equal(100);
    expect(employee.annualCost).to.equal(1200);
    expect(employee.name).to.equal('staff1');
  });

  it('department total cost', () => {
    const staff = [new Employee('staff1',1,100),new Employee('staff2',2,80)]
    const department = new Department('Labs', staff);
    expect(department.monthlyCost).to.equal(180);
    expect(department.annualCost).to.equal(2160);
    expect(department.headCount).to.equal(2);
    expect(department.name).to.equal('Labs');
  });
});

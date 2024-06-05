import {Employee, Department} from "../../src/chap12/pull-up-constructor-body.js";
import {expect} from "chai";

describe('pull-up-constructor-body', () => {
  it('', () => {
    const employee = new Employee('John', 1, 100);
    const department = new Department('Labs', 'Paul');
    expect(employee.name).to.equal('John');
    expect(department.name).to.equal('Labs');
  });
});

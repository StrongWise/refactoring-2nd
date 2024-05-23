import {Person, Department} from "../../src/chap07/hide-delegate.js";
import {expect} from "chai";

describe('hide delegate', () => {
  it('', () => {
    const aPerson = new Person("StrongWise");
    const aDepartment = new Department();
    aDepartment.manager = "Lab";
    aDepartment.chargeCode = "1";
    aPerson.department = aDepartment;

    expect(aPerson.name).to.eql("StrongWise");
    expect(aPerson.department.manager).to.eql("Lab");
    expect(aPerson.department.chargeCode).to.eql("1");
  });
});

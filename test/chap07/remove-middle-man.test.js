import {Person, Department} from "../../src/chap07/remove-middle-man.js";
import {expect} from "chai";

describe('remove-middle-man', () => {
  it('should ', () => {
    let manager;
    const aPerson = new Person();
    aPerson.department = new Department();
    aPerson.manager = "Lab"

    manager = aPerson.manager;
    expect(manager).to.equal("Lab");
  });
});

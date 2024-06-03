import {createEmployee, Employee} from "../../src/chap11/replace-constructor-with-factory-function.js";
import {expect} from "chai";

describe('replace-contructor-with-factory-function', () => {
  it('Employee', () => {
    const document = {name: 'StrongWise', empType: 'E'}
    const candidate = createEmployee(document.name, document.empType);
    expect(candidate.type).to.equal('Engineer');
  });
});

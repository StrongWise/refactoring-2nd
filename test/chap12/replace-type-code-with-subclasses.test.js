import {createEmployee, Employee2} from "../../src/chap12/replace-type-code-with-subclasses.js";
import {expect} from "chai";
import assert from "node:assert";

describe('replace-type-code-with-subclasses', () => {
  it('employee', () => {
    expect(createEmployee('eng', 'engineer').toString()).to.equal('eng (engineer)');
    expect(createEmployee('man', 'manager').toString()).to.equal('man (manager)');
    expect(createEmployee('sal', 'salesperson').toString()).to.equal('sal (salesperson)');
    assert.throws(() => createEmployee('ceo', 'ceo'), assert.Error);
  });

  it('employee2', () => {
    const employee2 = new Employee2('eng', 'engineer');
    expect(employee2.type).to.equal('engineer');
    expect(employee2.capitalizedType).to.equal('Engineer');
    expect(employee2.toString()).to.equal('eng (Engineer)');
    employee2.type = 'manager';
    expect(employee2.type).to.equal('manager');
  });
});

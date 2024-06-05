import {Employee} from "../../src/chap12/replace-type-code-with-subclasses.js";
import {expect} from "chai";
import assert from "node:assert";

describe('replace-type-code-with-subclasses', () => {
  it('employee', () => {
    expect(new Employee('eng', 'engineer').toString()).to.equal('eng (engineer)');
    expect(new Employee('man', 'manager').toString()).to.equal('man (manager)');
    expect(new Employee('sal', 'salesperson').toString()).to.equal('sal (salesperson)');
    assert.throws(() => new Employee('ceo', 'ceo'), assert.Error);
  });
});

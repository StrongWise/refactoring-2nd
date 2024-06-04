import {Employee, Salesperson, Engineer} from "../../src/chap12/pull-up-field.js";
import {expect} from "chai";

describe('pull-up-field', () => {
  it('', () => {
    const salesperson = new Salesperson({id: 1, name: 'king'});
    const engineer = new Engineer({id: 2, name: 'queen'});

    expect(salesperson.name).to.equal('king');
    expect(engineer.name).to.equal('queen');
  });
});

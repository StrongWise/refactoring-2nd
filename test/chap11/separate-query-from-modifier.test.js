import {alertForMiscreant, findMiscreant} from "../../src/chap11/separate-query-from-modifier.js";
import {expect} from "chai";

describe('separate-query-from-modifier', () => {
  it('alertForMiscreant', () => {
    const people = [];
    expect(findMiscreant(people)).empty;
    alertForMiscreant(people);
    const people1 = ['','조커',''];
    expect(findMiscreant(people1)).to.equal('조커');
    alertForMiscreant(people1);
    const people2 = ['사루만'];
    expect(findMiscreant(people2)).to.equal('사루만');
    alertForMiscreant(people2);
  });
});

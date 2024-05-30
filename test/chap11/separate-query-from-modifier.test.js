import {alertForMiscreant} from "../../src/chap11/separate-query-from-modifier.js";
import {expect} from "chai";

describe('separate-query-from-modifier', () => {
  it('alertForMiscreant', () => {
    expect(alertForMiscreant([])).empty;
    expect(alertForMiscreant(['','조커',''])).to.equal('조커');
    expect(alertForMiscreant(['사루만'])).to.equal('사루만');
  });
});

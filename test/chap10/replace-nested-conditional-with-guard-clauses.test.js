import {payAmount, adjustedCapital} from "../../src/chap10/replace-nested-conditional-with-guard-clauses.js";
import {expect} from "chai";
import assert from "node:assert";

describe('replace-nested-conditional-with-guard-clauses', () => {
  it('payAmount', () => {
    let employee = {
      isSeparated: true,
      isRetired: false,
    }
    assert.deepEqual(payAmount(employee), {amount: 0, reasonCode: 'SEP'});
    employee = {
      isSeparated: false,
      isRetired: true,
    }
    assert.deepEqual(payAmount(employee), {amount: 0, reasonCode: 'RET'});
    employee = {
      isSeparated: false,
      isRetired: false,
    }
    assert.deepEqual(payAmount(employee), {amount: 100000, reasonCode: 'ACT'});
  });
  it('adjustedCapital', () => {
    let instrument = {
      capital: 1,
      interestRate: 1,
      duration: 1,
      income: 1000,
      adjustmentFactor: 3,
    }
    expect(adjustedCapital(instrument)).to.equal(3000);
    instrument = {
      capital: 0,
      interestRate: 1,
      duration: 1,
      income: 1000,
      adjustmentFactor: 3,
    }
    expect(adjustedCapital(instrument)).to.equal(0);
    instrument = {
      capital: 1,
      interestRate: 0,
      duration: 1,
      income: 1000,
      adjustmentFactor: 3,
    }
    expect(adjustedCapital(instrument)).to.equal(0);
  });
});

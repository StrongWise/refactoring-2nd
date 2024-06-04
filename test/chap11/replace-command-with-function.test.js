import {ChargeCalculator} from "../../src/chap11/replace-command-with-function.js";
import {expect} from "chai";

describe('replace-command-with-function', () => {
  it('charge calculator', () => {
    const aChargeCalculator = new ChargeCalculator({baseRate: 1}, 20, {connectionCharge: 10});
    expect(aChargeCalculator.charge).to.equal(30);
    expect(aChargeCalculator.baseCharge).to.equal(20);
  });
});

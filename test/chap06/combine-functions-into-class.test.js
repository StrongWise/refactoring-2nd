import {acquireReading, baseRate, Reading, taxThreshold} from "../../src/chap06/combine-functions-into-class.js";
import {expect} from "chai";

describe('combine-functions-into-class', () => {
  let base
  beforeEach(() => {
    base = 10
  });
  it('client 1', () => {
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
    expect(baseCharge).equal(10000);
  });
  it('client 2', () => {
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
    expect(taxableCharge).equal(5);
  });
  it('client 3', () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const basicChargeAmount = aReading.calculateBaseCharge;
    expect(basicChargeAmount).equal(10000);
  });
})

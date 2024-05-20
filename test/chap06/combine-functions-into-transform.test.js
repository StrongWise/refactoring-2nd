import {expect} from "chai";
import {acquireReading, baseRate, taxThreshold} from "../../src/chap06/combine-functions-into-transform.js";
describe('combine-functions-into-transform', () => {
  it('client 1', () => {
    const aReading = acquireReading()
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
    expect(baseCharge).equal(10000);
  });
  it('client 2', () => {
    const aReading = acquireReading()
    const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
    expect(taxableCharge).equal(9995);
  });
  it('client 3', () => {
    const aReading = acquireReading()
    const basicChargeAmount = calculateBaseCharge(aReading);

    expect(basicChargeAmount).equal(10000);

    function calculateBaseCharge(aReading) {
      return baseRate(aReading.month, aReading.year) * aReading.quantity;
    }
  });
})

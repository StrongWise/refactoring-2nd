import {acquireReading, baseRate, taxThreshold} from "../../src/chap06/combine-functions-into-class.js";

describe('combine-functions-into-class', () => {
  let base
  beforeEach(() => {
    base = 10
  });
  it('client 1', () => {
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
    console.log(baseCharge);
  });
  it('client 2', () => {
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
    console.log(taxableCharge);
  });
  it('client 3', () => {
    const aReading = acquireReading();
    const basicChargeAmount = calculateBaseCharge(aReading);

    console.log(basicChargeAmount);
    function calculateBaseCharge(aReading) {
      return baseRate(aReading.month, aReading.year) * aReading.quantity;
    }
  });
})

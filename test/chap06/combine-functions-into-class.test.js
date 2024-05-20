import {acquireReading, Reading, taxableChargeFn} from "../../src/chap06/combine-functions-into-class.js";
import {expect} from "chai";

describe('combine-functions-into-class', () => {
  let base
  beforeEach(() => {
    base = 10
  });
  it('client 1', () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const baseCharge = aReading.baseCharge;
    expect(baseCharge).equal(10000);
  });
  it('client 2', () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const baseCharge = aReading.baseCharge;
    const taxableCharge = taxableChargeFn(base, aReading);
    expect(taxableCharge).equal(5);
  });
  it('client 3', () => {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
    expect(basicChargeAmount).equal(10000);
  });
})

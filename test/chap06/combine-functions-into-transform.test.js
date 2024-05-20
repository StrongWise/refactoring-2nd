import {expect} from "chai";
import assert from "node:assert";
import _ from "lodash";
import {acquireReading, enrichReading, taxThreshold} from "../../src/chap06/combine-functions-into-transform.js";

describe('combine-functions-into-transform', () => {
  it('client 1', () => {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const baseCharge = aReading.baseCharge;
    expect(baseCharge).equal(10000);
  });
  it('client 2', () => {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
    expect(taxableCharge).equal(9995);
  });
  it('client 3', () => {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
    expect(basicChargeAmount).equal(10000);
  });
  it('check reading unchanged', () => {
    const baseReading = acquireReading();
    const oracle = _.cloneDeep(baseReading);
    enrichReading(baseReading);
    assert.deepEqual(baseReading, oracle);
  });
})

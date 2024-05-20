import {expect} from "chai";
import assert from "node:assert";
import _ from "lodash";
import {acquireReading, enrichReading} from "../../src/chap06/combine-functions-into-transform.js";

describe('combine-functions-into-transform', () => {
  it('client 1', () => {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    expect(aReading.baseCharge).equal(10000);
  });
  it('client 2', () => {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    expect(aReading.taxableCharge).equal(9995);
  });
  it('client 3', () => {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    expect(aReading.baseCharge).equal(10000);
  });
  it('check reading unchanged', () => {
    const baseReading = acquireReading();
    const oracle = _.cloneDeep(baseReading);
    enrichReading(baseReading);
    assert.deepEqual(baseReading, oracle);
  });
})

import {call, call2} from "../../src/chap08/slide-statements.js";
import {expect} from "chai";
import assert from "node:assert";

describe('slide-statements', () => {
  it('should ', () => {
    const result = call();
    expect(result.charge).to.equal(2530);
    expect(result.discount).to.equal(470);
    expect(result.discountableUnits).to.equal(90);
  });

  it('should ', () => {
    assert.deepEqual(call2([], []), {resource: 1});
    assert.deepEqual(call2([{resource: 1}], [{resource: 1}, {resource: 2}]), {resource: 2});
  });
});

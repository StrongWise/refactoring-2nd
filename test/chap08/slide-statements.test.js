import {call} from "../../src/chap08/slide-statements.js";
import {expect} from "chai";

describe('slide-statements', () => {
  it('should ', () => {
    const result = call();
    expect(result.charge).to.equal(2530);
    expect(result.discount).to.equal(470);
    expect(result.discountableUnits).to.equal(90);
  });
});

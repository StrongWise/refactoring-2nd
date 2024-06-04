import {calculateAscent, totalAscent} from "../../src/chap11/return-modified-value.js";
import {expect} from "chai";

describe('return-modified-value', () => {
  it('calculate Ascent', () => {
    expect(totalAscent).to.equal(9);
    calculateAscent();
    expect(totalAscent).to.equal(18);
  });
});

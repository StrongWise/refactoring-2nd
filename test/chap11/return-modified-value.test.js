import {calculateAscent} from "../../src/chap11/return-modified-value.js";
import {expect} from "chai";

describe('return-modified-value', () => {
  it('calculate Ascent', () => {
    expect(calculateAscent()).to.equal(9);
  });
});

import {baseCharge, charge} from "../../src/chap11/replace-command-with-function.js";
import {expect} from "chai";

describe('replace-command-with-function', () => {
  it('charge calculator', () => {
    expect(charge({baseRate: 1}, 20, {connectionCharge: 10})).to.equal(30);
    expect(baseCharge({baseRate: 1}, 20, {connectionCharge: 10})).to.equal(20);
  });
});

import {expect} from "chai";
import {price} from "../../src/chap06/extract-variable.js";

describe('extract-variable', () => {
  it('price', () => {
    expect(price({quantity: 20, itemPrice: 400})).to.equal(8100);
  });
});

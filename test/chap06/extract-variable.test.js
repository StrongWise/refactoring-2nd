import {expect} from "chai";
import {Order, price} from "../../src/chap06/extract-variable.js";

describe('extract-variable', () => {
  it('price', () => {
    expect(price({quantity: 20, itemPrice: 400})).to.equal(8100);
  });
  it('priceOrderClass', () => {
    const order = new Order({quantity: 20, itemPrice: 400});
    expect(order.price).to.equal(8100);
  });
});

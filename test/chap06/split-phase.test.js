import {priceOrder} from "../../src/chap06/split-phase.js";
import {expect} from "chai";

describe('split-phase', () => {
  it('check price', () => {
    const product = {basePrice: 12000, discountRate: 0.05, discountThreshold: 5}
    const quantity = 8;
    const shippingMethod = {discountThreshold:100000, discountedFree:0, feePerCase: 3000}
    const price = priceOrder(product, quantity, shippingMethod);

    expect(price).equal(118200);
  });
});

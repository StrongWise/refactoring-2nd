import {Order} from "../../src/chap09/change-value-to-reference.js";
import {expect} from "chai";

describe('change-value-to-reference', () => {
  it('should ', () => {
    const newOrder = {
      number: 1231,
      customer: 3123
    }
    const order = new Order(newOrder);
    expect(order.customer.id).to.equal(3123);
  });
});

import {Customer} from "../../src/chap10/introduce-assertion.js";
import {expect} from "chai";

describe('introduce-assertion', () => {
  it('applyDiscount', () => {
    expect(new Customer(0.1).applyDiscount(100)).to.equal(90);
    // expect(new Customer(-0.1).applyDiscount(100)).to.equal(110);
    expect(new Customer(0).applyDiscount(100)).to.equal(100);
    expect(new Customer(1).applyDiscount(100)).to.equal(0);
    // expect(new Customer(-1).applyDiscount(100)).to.equal(200);
    expect(new Customer(10).applyDiscount(100)).to.equal(-900);
  });
});

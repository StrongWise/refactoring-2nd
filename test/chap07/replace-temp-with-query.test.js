import {Order} from "../../src/chap07/replace-temp-with-query.js";
import {expect} from "chai";

describe('replace-temp-with-query', () => {
  it('check price', () => {
    expect(new Order(4, {price: 1000}).price).to.equal(3800);
    expect(new Order(3, {price: 300}).price).to.equal(882);
  });
});

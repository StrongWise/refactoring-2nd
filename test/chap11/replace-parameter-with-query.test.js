import {Order} from "../../src/chap11/replace-parameter-with-query.js";
import {expect} from "chai";

describe('replace-parameter-with-query', () => {
  it('finalPrice', () => {
    expect(new Order(100, 2000).finalPrice).to.equal(190000);
    expect(new Order(200, 2000).finalPrice).to.equal(360000);
  });
});

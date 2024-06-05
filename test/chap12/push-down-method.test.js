import {Salesperson} from "../../src/chap12/push-down-method.js";
import {expect} from "chai";

describe('push-down-method', () => {
  it('quota', () => {
    const salesperson = new Salesperson();
    expect(salesperson.quota).to.equal('quota');
  });
});

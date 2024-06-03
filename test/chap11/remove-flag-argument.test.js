import {bookConcert} from "../../src/chap11/remove-flag-argument.js";
import {expect} from "chai";

describe('remove-flag-argument', () => {
  it('bookConcert', () => {
    const customer = {}
    expect(bookConcert(customer, true)).to.equal('Premium');
    expect(bookConcert(customer, false)).to.equal('Not Premium');
  });
});

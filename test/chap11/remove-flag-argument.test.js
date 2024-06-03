import {bookConcert, premiumBookConcert} from "../../src/chap11/remove-flag-argument.js";
import {expect} from "chai";

describe('remove-flag-argument', () => {
  it('bookConcert', () => {
    const customer = {}
    expect(premiumBookConcert(customer)).to.equal('Premium');
    expect(bookConcert(customer)).to.equal('Not Premium');
  });
});

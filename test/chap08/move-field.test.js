import {Customer, Account, AccountType} from "../../src/chap08/move-field.js";
import {expect} from "chai";
import assert from "node:assert";
import Money from 'js-money';

describe('move-field', () => {
	it('calculates discount', () => {
		const customer = new Customer('Mike', 0.05);
    assert.deepEqual(customer.applyDiscount(new Money(500, Money.KRW)), new Money(475, Money.KRW))
	});

  it('', () => {
    const interestRate = '0.01';
    const account = new Account(1, new AccountType('asd', interestRate));
    expect(account.interestRate).to.equal(interestRate);
  });
});

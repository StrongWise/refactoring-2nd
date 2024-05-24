import {Customer} from "../../src/chap08/move-field.js";
import assert from "node:assert";
import Money from 'js-money';

describe('move-field', () => {
	it('calculates discount', () => {
		const customer = new Customer('Mike', 0.05);
    assert.deepEqual(customer.applyDiscount(new Money(500, Money.KRW)), new Money(475, Money.KRW))
	});
});

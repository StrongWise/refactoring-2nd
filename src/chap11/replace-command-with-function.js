export class ChargeCalculator {
	constructor(customer, usage, provider) {
		this._provider = provider;
	}

	charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage
		return baseCharge + this._provider.connectionCharge;
	}
}

export function charge(customer, usage, provider) {
	return new ChargeCalculator(customer, usage, provider)
    .charge(customer, usage, provider);
}

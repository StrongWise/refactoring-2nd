export class Customer {
	constructor(data) {
		this.discountRate = data;
	}
	applyDiscount(aNumber) {
		return this.discountRate
      ? aNumber - this.discountRate * aNumber
      : aNumber;
	}
}

export class Customer {
	constructor(data) {
		this.discountRate = data;
	}
	applyDiscount(aNumber) {
    if (!this.discountRate) {
      return aNumber
    } else {
      return aNumber - this.discountRate * aNumber;
    }
	}
}

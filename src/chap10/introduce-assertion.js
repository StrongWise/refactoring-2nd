import assert from "node:assert";
export class Customer {
	constructor(data) {
		this.discountRate = data;
	}
	applyDiscount(aNumber) {
    if (!this.discountRate) {
      return aNumber
    } else {
      assert(this.discountRate >= 0);
      return aNumber - this.discountRate * aNumber;
    }
	}
}

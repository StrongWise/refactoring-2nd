import assert from "node:assert";
export class Customer {
	constructor(data) {
		this.discountRate = data;
	}
	applyDiscount(aNumber) {
    if (!this._discountRate) {
      return aNumber
    } else {
      assert(this._discountRate >= 0);
      return aNumber - this._discountRate * aNumber;
    }
	}
  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }
}

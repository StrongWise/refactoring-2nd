const base = 10
export class Reading {
	constructor(data) {
		this._customer = data._customer;
		this._quantity = data._quantity;
		this._month = data._month;
		this._year = data._year;
	}
	get customer() {
		return this._customer;
	}
	get quantity() {
		return this._quantity;
	}
	get month() {
		return this._month;
	}
	get year() {
		return this._year;
	}
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
  get taxableCharge() {
    return  Math.max(0, base - taxThreshold(this.year));
  }
}

export function acquireReading() {
  return new Reading({
    _customer: 'ivan',
    _quantity: 10,
    _month: 5,
    _year: 2024,
  });
}

export function baseRate(month, year) {
  return 1000;
}
export function taxThreshold(year) {
  return 5
}

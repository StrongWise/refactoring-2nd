export class HeatingPlan {
  _temperatureRange= {low:0, high:0};
	constructor(low, high) {
		this._temperatureRange.low = low;
		this._temperatureRange.high = high;
	}

	withinRange(bottom, top) {
		return (bottom >= this._temperatureRange.low)
      && (top <= this._temperatureRange.high);
	}

  xxNEWwithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
	}
}

export class HeatingPlan {
  _temperatureRange= {low:0, high:0};
	constructor(low, high) {
		this._temperatureRange.low = low;
		this._temperatureRange.high = high;
  }
  xxNEWwithinRange(aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low)
      && (aNumberRange.high <= this._temperatureRange.high);
	}
}

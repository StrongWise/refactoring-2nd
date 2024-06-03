export class HeatingPlan {
  _temperatureRange = {low: 0, high: 0};

  constructor(low, high) {
    this._temperatureRange.low = low;
    this._temperatureRange.high = high;
  }

  withinRange(aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low)
      && (aNumberRange.high <= this._temperatureRange.high);
  }
  withinRange2(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    return (low >= this._temperatureRange.low)
      && (high <= this._temperatureRange.high);
  }

}

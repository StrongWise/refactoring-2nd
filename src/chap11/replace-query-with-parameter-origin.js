export const thermostat = {
  selectedTemperature: 0,
  currentTemperature: 0
};

export class HeatingPlan {
  constructor(min, max) {
    this._min = min;
    this._max = max;
  }

  get targetTemperature() {
    if (thermostat.selectedTemperature > this._max) return this._max;
    else if (thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
  }
}

export function setAirConditioner(thePlan) {
  if (thePlan.targetTemperature > thermostat.currentTemperature) {
    return 'setToHeat';
  } else if (thePlan.targetTemperature < thermostat.currentTemperature) {
    return 'setToCool';
  } else {
    return 'setOff';
  }
}

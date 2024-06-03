export const thermostat = {
  selectedTemperature: 0,
  currentTemperature: 0
};

export class HeatingPlan {
  constructor(min, max) {
    this._min = min;
    this._max = max;
  }

  targetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

export function setAirConditioner(thePlan) {
  if (thePlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) {
    return 'setToHeat';
  } else if (thePlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) {
    return 'setToCool';
  } else {
    return 'setOff';
  }
}

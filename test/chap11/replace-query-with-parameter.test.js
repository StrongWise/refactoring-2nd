import {HeatingPlan, setAirConditioner, thermostat} from "../../src/chap11/replace-query-with-parameter.js";
import {expect} from "chai";

describe('replace-query-with-parameter', () => {
  beforeEach(()=>{
    thermostat.selectedTemperature = 25;
    thermostat.currentTemperature = 20;
  })
  it('setAirConditioner', () => {
    expect(setAirConditioner(new HeatingPlan(16, 19))).to.equal('setToCool');
    expect(setAirConditioner(new HeatingPlan(17, 20))).to.equal('setOff');
    expect(setAirConditioner(new HeatingPlan(27, 29))).to.equal('setToHeat');
  });

  it('HeatingPlan', () => {
    expect(new HeatingPlan(27, 29).targetTemperature(thermostat.selectedTemperature)).to.equal(27);
    expect(new HeatingPlan(23, 24).targetTemperature(thermostat.selectedTemperature)).to.equal(24);
  });
});

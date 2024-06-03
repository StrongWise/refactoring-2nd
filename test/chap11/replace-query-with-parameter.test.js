import {HeatingPlan, setAirConditioner, thermostat} from "../../src/chap11/replace-query-with-parameter.js";
import {expect} from "chai";

describe('replace-query-with-parameter', () => {
  beforeEach(()=>{
    thermostat.selectedTemperature = 25;
    thermostat.currentTemperature = 20;
  })
  it('setAirConditioner', () => {
    expect(setAirConditioner({targetTemperature: 19})).to.equal('setToCool');
    expect(setAirConditioner({targetTemperature: 20})).to.equal('setOff');
    expect(setAirConditioner({targetTemperature: 21})).to.equal('setToHeat');
  });

  it('HeatingPlan', () => {
    expect(new HeatingPlan(27, 29).targetTemperature).to.equal(27);
    expect(new HeatingPlan(23, 24).targetTemperature).to.equal(24);
  });
});

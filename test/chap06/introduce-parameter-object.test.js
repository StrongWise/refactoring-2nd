import {expect} from 'chai';
import {NumberRange, readingsOutsideRange, station} from "../../src/chap06/introduce-parameter-object.js";

describe('introduce-parameter-object', () => {
  it('readingsOutsideRange', () => {
    const operatingPlan = {temperatureFloor:50, temperatureCeiling: 55}
    const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
    let result = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling, range);
    expect(result[0].temp).to.equal(47);
    expect(result[1].temp).to.equal(58);
  });
  it('readingsOutsideRangeEdge', () => {
    let operatingPlan = {temperatureFloor:0, temperatureCeiling: 57}
    let range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
    let result = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling, range);
    expect(result[0].temp).to.equal(58);

    operatingPlan = {temperatureFloor: 48, temperatureCeiling: 60}
    range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
    result = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling, range);
    expect(result[0].temp).to.equal(47);
  });
});

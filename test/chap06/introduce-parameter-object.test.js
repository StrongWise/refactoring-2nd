import {expect} from 'chai';
import {readingsOutsideRange, station} from "../../src/chap06/introduce-parameter-object.js";

describe('introduce-parameter-object', () => {
  it('readingsOutsideRange', () => {
    const operatingPlan = {temperatureFloor:50, temperatureCeiling: 55}
    let result = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling, null);
    expect(result[0].temp).to.equal(47);
    expect(result[1].temp).to.equal(58);
  });
  it('readingsOutsideRangeEdge', () => {
    let operatingPlan = {temperatureFloor:0, temperatureCeiling: 57}
    let result = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling, null);
    expect(result[0].temp).to.equal(58);

    operatingPlan = {temperatureFloor: 48, temperatureCeiling: 60}
    result = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling, null);
    expect(result[0].temp).to.equal(47);
  });
});

import {HeatingPlan} from "../../src/chap11/preserve-whole-object.js";
import {expect} from "chai";

describe('preserve-whole-object', () => {
  it('', () => {
    const aPlan = new HeatingPlan(10, 20);
    let aRoom = {daysTempRange: {low: 10, high: 20}}
    let low = aRoom.daysTempRange.low;
    let high = aRoom.daysTempRange.high;
    expect(aPlan.withinRange(low, high)).to.equal(true);

    aRoom = {daysTempRange: {low: 5, high: 20}}
    low = aRoom.daysTempRange.low;
    high = aRoom.daysTempRange.high;
    expect(aPlan.withinRange(low, high)).to.equal(false);
  });
});

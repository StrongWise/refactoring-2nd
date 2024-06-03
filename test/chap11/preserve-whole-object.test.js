import {HeatingPlan} from "../../src/chap11/preserve-whole-object.js";
import {expect} from "chai";

describe('preserve-whole-object', () => {
  it('HeatingPlan', () => {
    const aPlan = new HeatingPlan(10, 20);
    let aRoom = {daysTempRange: {low: 10, high: 20}}
    expect(aPlan.withinRange(aRoom.daysTempRange)).to.equal(true);

    aRoom = {daysTempRange: {low: 5, high: 20}}
    expect(aPlan.withinRange(aRoom.daysTempRange)).to.equal(false);
  });
});

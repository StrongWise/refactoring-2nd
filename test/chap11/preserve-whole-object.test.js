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
  it('HeatingPlan2', () => {
    const aPlan = new HeatingPlan(10, 20);
    let aRoom = {daysTempRange: {low: 10, high: 20}}
    let tempRange = aRoom.daysTempRange;
    let isWithinRange = aPlan.withinRange2(tempRange);
    expect(isWithinRange).to.equal(true);

    aRoom = {daysTempRange: {low: 5, high: 20}}
    tempRange = aRoom.daysTempRange;
    isWithinRange = aPlan.withinRange2(tempRange);
    expect(isWithinRange).to.equal(false);
  });
});

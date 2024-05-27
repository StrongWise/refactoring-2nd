import {distanceTravelled} from "../../src/chap09/split-variable.js";
import {expect} from "chai";

describe('split-variable', () => {
  it('should 82', () => {
    const scenario = {
      primaryForce: 10,
      secondaryForce: 20,
      mass: 5,
      delay: 4
    }
    expect(distanceTravelled(scenario, 10)).to.equal(82);
  });
});

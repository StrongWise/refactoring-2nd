import {discount, distanceTravelled} from "../../src/chap09/split-variable.js";
import {expect} from "chai";

describe('split-variable', () => {
  it('distanceTravelled should 82', () => {
    const scenario = {
      primaryForce: 10,
      secondaryForce: 20,
      mass: 5,
      delay: 4
    }
    expect(distanceTravelled(scenario, 10)).to.equal(82);
  });
  it('distanceTravelled should 16', () => {
    const scenario = {
      primaryForce: 10,
      secondaryForce: 20,
      mass: 5,
      delay: 10
    }
    expect(distanceTravelled(scenario, 4)).to.equal(16);
  });

  it('discount', () => {
    expect(discount(10, 10)).to.equal(10);
    expect(discount(100, 10)).to.equal(98);
    expect(discount(100, 200)).to.equal(97);
  });
});

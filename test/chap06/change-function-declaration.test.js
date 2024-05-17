import {expect} from "chai";
import {circum, circumference} from "../../src/chap06/change-function-declaration.js";

describe('change-function-declaration', () => {
  it('circum', () => {
    const radius = 3;
    expect(circumference(radius)).equal(2 * Math.PI * radius);
  })
  it('circumference', () => {
    const radius = 3;
    expect(circumference(radius)).equal(2 * Math.PI * radius);
  })
})

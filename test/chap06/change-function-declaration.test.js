import {expect} from "chai";
import {circumference} from "../../src/chap06/change-function-declaration.js";

describe('change-function-declaration', () => {
  it('circumference', () => {
    const radius = 3;
    expect(circumference(radius)).equal(2 * Math.PI * radius);
  })
})

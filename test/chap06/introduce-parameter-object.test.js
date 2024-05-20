import {expect} from 'chai';
import {readingsOutsideRange, station} from "../../src/chap06/introduce-parameter-object.js";

describe('introduce-parameter-object', () => {
  it('readingsOutsideRange', () => {
    let result = readingsOutsideRange(station, 50, 55);
    expect(result[0].temp).to.equal(47);
    expect(result[1].temp).to.equal(58);
  });
  it('readingsOutsideRangeEdge', () => {
    let result = readingsOutsideRange(station, 0, 57);
    expect(result[0].temp).to.equal(58);
    result = readingsOutsideRange(station, 48, 60);
    expect(result[0].temp).to.equal(47);
  });
});

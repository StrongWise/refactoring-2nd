import {charge} from "../../src/chap10/decompose-conditional.js";
import {expect} from "chai";
import moment from 'moment';

describe('decompose-contitional', () => {
  it('should ', () => {
    const plan = {
      summerStart:moment('2024-05-05'),
      summerEnd:moment('2024-08-08'),
      summerRate:5,
      regularRate:4,
      regularServiceCharge:100
    }
    expect(charge(moment('2024-05-28'), plan, 30)).to.equal(150);
    expect(charge(moment('2023-05-28'), plan, 30)).to.equal(220);
  });
});

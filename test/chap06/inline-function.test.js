import {expect} from 'chai';
import {rating, reportLines} from '../../src/chap06/inline-function.js';

describe('inline-function', () => {
  it('rating', () => {
    expect(rating({numberOfLateDeliveries: 6})).to.equal(2);
    expect(rating({numberOfLateDeliveries: 5})).to.equal(1);
  });
  it('reportLines', () => {
    const result = reportLines({name: 'StrongWise', location:'Seoul'});
    expect(result[0][1]).to.equal('StrongWise');
    expect(result[1][1]).to.equal('Seoul');
  });
});

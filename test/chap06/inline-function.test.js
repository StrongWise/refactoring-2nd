import {expect} from 'chai';
import {rating} from '../../src/chap06/inline-function.js';

describe('inline-function', () => {
  it('rating', () => {
    expect(rating({numberOfLateDeliveries: 6})).to.equal(2);
    expect(rating({numberOfLateDeliveries: 5})).to.equal(1);
  });
});

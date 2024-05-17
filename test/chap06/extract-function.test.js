import chai, {expect} from 'chai';
import spies from 'chai-spies';
import {printOwing} from '../../src/chap06/extract-function.js';

chai.use(spies);

describe('extract-function', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console, 'log');
  });

  it('printOwing', () => {
    const invoice = {
      orders: [{ amount: 100 }, { amount: 40 }],
      customer: 'BigCo'
    };

    printOwing(invoice);

    expect(consoleLogSpy).to.have.been.called.exactly(6);
    expect(consoleLogSpy).to.have.been.called.with('***********************');
    expect(consoleLogSpy).to.have.been.called.with('**** 고객 채무 ****');
    expect(consoleLogSpy).to.have.been.called.with('***********************');
    expect(consoleLogSpy).to.have.been.called.with('고객명: BigCo');
    expect(consoleLogSpy).to.have.been.called.with('채무액: 140');
    expect(consoleLogSpy).to.have.been.called.with('마감일: ' + new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 30).toLocaleDateString());
  });
});

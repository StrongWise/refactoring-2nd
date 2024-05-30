import {baseCharge, fivePercentRaise, raise, tenPercentRaise} from "../../src/chap11/parameterize-function.js";
import {expect} from "chai";
import Money from "js-money";
import _ from "lodash";

describe('parameterize-function', () => {
  const aPerson = {salary: new Money(1000, Money.KRW)};
  it('10% salary calculate', () => {
    const tPerson = _.cloneDeep(aPerson);
    tenPercentRaise(tPerson);
    expect(tPerson.salary.amount).to.equal(1100);

    const fPerson = _.cloneDeep(aPerson);
    raise(fPerson, 0.1);
    expect(fPerson.salary.amount).to.equal(tPerson.salary.amount);
  });
  it('5% salary calculate', () => {
    const tPerson = _.cloneDeep(aPerson);
    fivePercentRaise(tPerson);
    expect(tPerson.salary.amount).to.equal(1050);

    const fPerson = _.cloneDeep(aPerson);
    raise(fPerson, 0.05);
    expect(fPerson.salary.amount).to.equal(tPerson.salary.amount);
  });

  it('base charge', () => {
    expect(baseCharge(40)).to.equal('1.2 $');
    expect(baseCharge(160)).to.equal('6 $');
    expect(baseCharge(270)).to.equal('12.9 $');
  });
});

import {baseCharge, fivePercentRaise, raise, tenPercentRaise} from "../../src/chap11/parameterize-function.js";
import {expect} from "chai";
import Money from "js-money";

describe('parameterize-function', () => {
  it('10% salary calculate', () => {
    const aPerson = {salary: new Money(1000, Money.KRW)};
    tenPercentRaise(aPerson);
    expect(aPerson.salary.amount).to.equal(1100);

    const person = {salary: new Money(1000, Money.KRW)};
    raise(person, 0.1);
    expect(person.salary.amount).to.equal(aPerson.salary.amount);
  });
  it('5% salary calculate', () => {
    const aPerson = {salary: new Money(1000, Money.KRW)};
    fivePercentRaise(aPerson);
    expect(aPerson.salary.amount).to.equal(1050);

    const person = {salary: new Money(1000, Money.KRW)};
    raise(person, 0.05);
    expect(person.salary.amount).to.equal(aPerson.salary.amount);
  });

  it('base charge', () => {
    expect(baseCharge(40)).to.equal('1.2 $');
    expect(baseCharge(160)).to.equal('6 $');
    expect(baseCharge(270)).to.equal('12.9 $');
  });
});

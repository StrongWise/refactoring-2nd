import {Customer, Site} from "../../src/chap10/introduce-special-case-literal.js";
import {expect} from "chai";

describe('introduce-special-case', () => {
  let aCustomer
  let uCustomer
  beforeEach(() => {
    const customer = new Customer({
      name: 'StrongWise',
      billingPlan: 'Monthly',
      paymentHistory: {
        weeksDelinquentInLastYear: 10
      }
    });
    aCustomer = new Site({customer: customer}).customer;
    uCustomer = new Site({customer: '미확인 고객'}).customer;
  })


  it('client 1', () => {
    expect(aCustomer.name).to.equal('StrongWise');
  });
  it('undefined client 1', () => {
    expect(uCustomer.name).to.equal('거주자');
  });

  it('client 2', () => {
    expect(aCustomer.billingPlan).to.equal('Monthly');
  });
  it('undefined client 2', () => {
    expect(uCustomer.billingPlan).to.equal('registry.billingPlans.basic');
  });

  it('client 3', () => {
    setNewPlan(aCustomer);
    expect(aCustomer.billingPlan).to.equal('Weekly');
  });

  it('undefined client 3', () => {
    setNewPlan(uCustomer);
    expect(uCustomer.billingPlan).to.equal('registry.billingPlans.basic');
  });
  it('client 4', () => {
    expect(getWeeksDelinquent(aCustomer)).to.equal(10);
  });

  it('undefined client 4', () => {
    expect(getWeeksDelinquent(uCustomer)).to.equal(0);
  });

});

function setNewPlan(aCustomer) {
  const newPlan = 'Weekly'
  if (!isUnknown(aCustomer)) {
    aCustomer.billingPlan = newPlan;
  }
}

function getWeeksDelinquent(aCustomer) {
  return isUnknown(aCustomer) ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

function isUnknown(arg) {
  return arg.isUnknown;
}

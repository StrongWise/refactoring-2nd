import {Customer, Site} from "../../src/chap10/introduce-special-case.js";
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
    expect(getCustomerName(aCustomer)).to.equal('StrongWise');
  });
  it('undefined client 1', () => {
    expect(getCustomerName(uCustomer)).to.equal('거주자');
  });

  it('client 2', () => {
    expect(getPlan(aCustomer)).to.equal('Monthly');
  });
  it('undefined client 2', () => {
    expect(getPlan(uCustomer)).to.equal('registry.billingPlans.basic');
  });

  it('client 3', () => {
    setNewPlan(aCustomer);
    expect(aCustomer.billingPlan).to.equal('Weekly');
  });

  it('undefined client 3', () => {
    setNewPlan(uCustomer);
    expect(uCustomer.billingPlan).undefined;
  });
  it('client 4', () => {
    expect(getWeeksDelinquent(aCustomer)).to.equal(10);
  });

  it('undefined client 4', () => {
    expect(getWeeksDelinquent(uCustomer)).to.equal(0);
  });

});

function getCustomerName(aCustomer) {
  if (aCustomer === '미확인 고객') return '거주자';
  else return aCustomer.name;
}

function getPlan(aCustomer) {
  return (aCustomer === '미확인 고객') ? 'registry.billingPlans.basic' : aCustomer.billingPlan;
}

function setNewPlan(aCustomer) {
  const newPlan = 'Weekly'
  if (aCustomer !== '미확인 고객') {
    aCustomer.billingPlan = newPlan;
  }
}

function getWeeksDelinquent(aCustomer) {
  return (aCustomer === '미확인 고객') ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

function isUnknown(arg) {
  if (!((arg instanceof Customer) || (arg === '미확인 고객')))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return (arg === '미확인 고객');
}

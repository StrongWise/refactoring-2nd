import {Customer, Site, UnknownCustomer} from "../../src/chap10/introduce-special-case.js";
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
    aCustomer.billingPlan = 'Weekly';
    expect(aCustomer.billingPlan).to.equal('Weekly');
  });

  it('undefined client 3', () => {
    uCustomer.billingPlan = 'Weekly';
    expect(uCustomer.billingPlan).to.equal('registry.billingPlans.basic');
  });
  it('client 4', () => {
    expect(getWeeksDelinquent(aCustomer)).to.equal(10);
  });

  it('undefined client 4', () => {
    expect(getWeeksDelinquent(uCustomer)).to.equal(0);
  });

});

function getWeeksDelinquent(aCustomer) {
  return aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

function isUnknown(arg) {
  if (!((arg instanceof Customer) || (arg instanceof UnknownCustomer)))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return arg.isUnknown;
}

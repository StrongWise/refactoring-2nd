import {Customer, Site} from "../../src/chap10/introduce-special-case-transform-function.js";
import {expect} from "chai";
import _ from 'lodash';

function acquireSiteData() {
  const customer = new Customer({
    name: '애크미 산업',
    billingPlan: 'plan-451',
    paymentHistory: {
      weeksDelinquentInLastYear: 7
    }
  });
  return new Site({name: '애크미 보스턴', location: 'Malden MA', customer: customer});
}

function enrichSite(inputSite) {
  const result = _.cloneDeep(inputSite);
  const unknownCustomer = {
    isUnknown: true,
  };
  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}
function uAcquireSiteData() {
  return new Site({name: '물류창고 15', location: 'Malden MA', customer: '미확인 고객'});
}

describe('introduce-special-case', () => {
  let aCustomer
  let uCustomer
  beforeEach(() => {
    const rawSite = acquireSiteData();
    const site = enrichSite(rawSite);
    aCustomer = site.customer;
    const uRawSite = uAcquireSiteData();
    const uSite = enrichSite(uRawSite);
    uCustomer = uSite.customer;
  })


  it('client 1', () => {
    expect(getCustomerName(aCustomer)).to.equal('애크미 산업');
  });
  it('undefined client 1', () => {
    expect(getCustomerName(uCustomer)).to.equal('거주자');
  });

  it('client 2', () => {
    expect(getPlan(aCustomer)).to.equal('plan-451');
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
    expect(getWeeksDelinquent(aCustomer)).to.equal(7);
  });

  it('undefined client 4', () => {
    expect(getWeeksDelinquent(uCustomer)).to.equal(0);
  });

});

function getCustomerName(aCustomer) {
  if (isUnknown(aCustomer)) return '거주자';
  else return aCustomer.name;
}

function getPlan(aCustomer) {
  return (isUnknown(aCustomer)) ? 'registry.billingPlans.basic' : aCustomer.billingPlan;
}

function setNewPlan(aCustomer) {
  const newPlan = 'Weekly'
  if (!isUnknown(aCustomer)) {
    aCustomer.billingPlan = newPlan;
  }
}

function getWeeksDelinquent(aCustomer) {
  return (isUnknown(aCustomer)) ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

function isUnknown(aCustomer) {
  if (aCustomer === '미확인 고객') return true
  else return aCustomer.isUnknown;
}

export class Site {
  constructor(data) {
    this._customer = data.customer;
  }

  get customer() {
    return (this._customer === '미확인 고객') ? createUnknownCustomer() : this._customer;
  }
}

export class Customer {
  constructor(data) {
    this._name = data.name
    this._billingPlan = data.billingPlan
    this._paymentHistory = data.paymentHistory
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(arg) {
    this._billingPlan = arg
  }

  get paymentHistory() {
    return this._paymentHistory;
  }

  get isUnknown() {
    return false;
  }
}

function createUnknownCustomer() {
  return {
    isUnknown: true,
    name: '거주자',
    billingPlan: 'registry.billingPlans.basic',
  };
}

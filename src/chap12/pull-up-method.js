export class Party {
  constructor() {
    this._monthlyCost = 1;
  }

  get monthlyCost() {
    throw new SubClassResponsibilityError();
  }

  get annualCost() {
    return this._monthlyCost * 12;
  }
}

export class Employee extends Party {
  get monthlyCost() {
    return this._monthlyCost
  }
}

export class Department extends Party {
  get monthlyCost() {
    return this._monthlyCost
  }
}

class SubClassResponsibilityError extends Error{
  constructor(errorCode) {
    super(`Sub Class Responsibility : ${errorCode}`);
  }
}

export class Employee {
  constructor(name, id, monthlyCost) {
    this._id = id
    this._name = name
    this._monthlyCost = monthlyCost
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  get annualCost() {
    return this._monthlyCost * 12;
  }
}

export class Department {
  constructor(name, staff) {
    this._name = name;
    this._staff = staff;
  }

  get name() {
    return this._name;
  }

  get staff() {
    return this._staff;
  }

  get totalMonthlyCost() {
    return this.staff
      .map(e => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }

  get headCount() {
    return this.staff.length;
  }

  get totalAnnualCost() {
    return this.totalMonthlyCost * 12;
  }
}

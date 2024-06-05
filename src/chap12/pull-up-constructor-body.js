export class Party {
	constructor() {
	}
}

export class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }

  get name() {
    return this._name;
  }
}

export class Department extends Party {
  constructor(name, staff) {
    super();
    this._name = name;
    this._staff = staff;
  }
  get name() {
    return this._name;
  }
}

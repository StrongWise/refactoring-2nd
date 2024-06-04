export class Employee {
  constructor(data) {
    this._id = data.id
  }
}

export class Salesperson extends Employee {
  constructor(data) {
    super(data);
    this._name = data.name;
  }

  get name() {
    return this._name;
  }
}
export class Engineer extends Employee {
  constructor(data) {
    super(data);
    this._name = data.name;
  }

  get name() {
    return this._name;
  }
}

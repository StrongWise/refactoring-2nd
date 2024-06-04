export class Employee {
  constructor(data) {
    this._id = data.id
    this._name = data.name;
  }

  get name() {
    return this._name;
  }
}

export class Salesperson extends Employee {
  constructor(data) {
    super(data);
  }
}
export class Engineer extends Employee {
  constructor(data) {
    super(data);
  }

}

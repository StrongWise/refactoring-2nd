export class Employee {
  constructor(name) {
    this._name = name;
  }
  toString() {
    return `${this._name} (${this.type})`;
  }
}

class Engineer extends Employee {
  get type() {return 'engineer';}
}

class Salesperson extends Employee {
  get type() {return 'salesperson';}
}

class Manager extends Employee {
  get type() {return 'manager';}
}

export function createEmployee(name, type) {
  switch (type) {
    case 'engineer': return new Engineer(name);
    case 'salesperson': return new Salesperson(name);
    case 'manager': return new Manager(name);
    default: throw new Error(`${type}라는 직원 유형은 없습니다.`);
  }
}

export class Employee2 {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this.type = type;
  }

  validateType(arg) {
    if (!['engineer', 'manager', 'salesperson'].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }
  get typeString() {return this._type.toString();}
  get type() {return this._type;}
  set type(arg) {this._type = Employee2.createEmployeeType(arg);}

  static createEmployeeType(aString) {
    switch (aString) {
      case 'engineer': return new Engineer2();
      case 'salesperson': return new Salesperson2();
      case 'manager': return new Manager2();
      default: throw new Error(`${aString}라는 직원 유형은 없습니다.`);
    }
  }

  toString() {
    return `${this._name} (${this.type.capitalizedName})`;
  }
}

class EmployeeType {
  get capitalizedName() {
    return this.toString().charAt(0).toUpperCase()
      + this.toString().substr(1).toLowerCase();
  }
}

class Engineer2 extends EmployeeType {
  toString() {return 'engineer';}
}

class Salesperson2 extends EmployeeType {
  toString() {return 'salesperson';}
}

class Manager2 extends EmployeeType {
  toString() {return 'manager';}
}

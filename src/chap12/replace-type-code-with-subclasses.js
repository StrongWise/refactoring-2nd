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
  set type(arg) {this._type = new EmployeeType(arg);}

  get capitalizedType() {
    return this.typeString.charAt(0).toUpperCase()
      + this.typeString.substr(1).toLowerCase();
  }
  toString() {
    return `${this._name} (${this.capitalizedType})`;
  }
}

class EmployeeType {
  constructor(aString) {
    this._value = aString;
  }
  toString() {return this._value;}
}

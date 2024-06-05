export class Employee {
}

export class Engineer extends Employee {

}

export class Salesperson extends Employee {
  get quota() {
    return 'quota';
  }
}

export class Person {
  get department() {
    return this._department;
  }
  set department(arg) {
    this._department = arg;
  }
  get manager() {
    return this._department.manager;
  }
  set manager(arg) {
    this._department.manager = arg;
  }
}

export class Department {
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

export class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {return this._name;}
  get genderCode() {return "X";}

}

export class Male extends Person {
  get genderCode() {return "M";}
}
export class Female extends Person {
  get genderCode() {return "F";}
}

export function createPerson(name) {
  return new Person(name);
}
export function createMale(name) {
  return new Male(name);
}
export function createFemale(name) {
  return new Female(name);
}

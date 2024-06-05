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

export function loadFromInput(data) {
  const result = [];
  data.forEach(aRecord => {
    let p;
    switch (aRecord.gender) {
      case 'M': p = new Male(aRecord.name);
        break;
      case 'F': p = new Female(aRecord.name);
        break;
      default: p = new Person(aRecord.name);
    }
    result.push(p);
  })
  return result;
}

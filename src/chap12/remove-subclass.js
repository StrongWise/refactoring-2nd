export class Person {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode || "X";
  }
  get name() {return this._name;}
  get genderCode() {return this._genderCode;}

  get isMale() {
    return 'M' === this._genderCode;
  }
}

export class Male extends Person {
  get genderCode() {return "M";}
}
export class Female extends Person {
  get genderCode() {return "F";}
}

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case 'M': return new Person(aRecord.name, 'M');
    case 'F': return new Person(aRecord.name, 'F');
    default: return  new Person(aRecord.name);
  }
}

export function createMale(name) {
  return new Person(name, 'M');
}
export function createFemale(name) {
  return new Person(name, 'F');
}

export function loadFromInput(data) {
  return data.map(aRecord => createPerson(aRecord));
}

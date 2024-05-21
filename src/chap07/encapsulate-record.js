export function simpleRecordEncapsulate(organization, newName) {
  let result = '';

  result += `<h1>${getOrganization().name}</h1>`; // 읽기 예
  getOrganization().name = newName; // 쓰기 예
  result += `<h1>${getOrganization().name}</h1>`;
  return result;

  function getOrganization() {
    return organization;
  }
}

export class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(aString) {
    this._name = aString;
  }

  get country() {
    return this._country;
  }

  set country(aString) {
    this._country = aString;
  }
}

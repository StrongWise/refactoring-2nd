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
    this._data = data;
  }

  get name() {
    return this._data.name;
  }

  set name(aString) {
    this._data.name = aString;
  }
}

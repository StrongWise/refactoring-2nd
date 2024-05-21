export function simpleRecordEncapsulate(organization, newName) {
  let result = '';

  result += `<h1>${getRawDataOfOrganization().name}</h1>`; // 읽기 예
  getRawDataOfOrganization().name = newName; // 쓰기 예
  result += `<h1>${getRawDataOfOrganization().name}</h1>`;
  return result;

  function getRawDataOfOrganization() {
    return organization._data;
  }
  function getOrganization() {
    return organization;
  }
}

export class Organization {
  constructor(data) {
    this._data = data;
  }
}

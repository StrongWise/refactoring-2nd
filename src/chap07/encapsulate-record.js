export function simpleRecordEncapsulate(organization, newName) {
  let result = '';

  result += `<h1>${organization.name}</h1>`; // 읽기 예
  organization.name = newName; // 쓰기 예
  result += `<h1>${organization.name}</h1>`;
  return result;
}

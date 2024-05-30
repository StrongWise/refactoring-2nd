function checkForMiscreants(people) {
  return people.some(p => ['조커', '사루만'].includes(p))
}

export function findMiscreant(people) {
  return checkForMiscreants(people);
}

function sendAlert(p) {
  console.log(p);
}

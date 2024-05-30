function checkForMiscreants(people) {
  let found = false;
  for (const p of people) {
    if (!found) {
      if (p === '조커') {
        sendAlert(p);
        found = true;
      }
      if (p === '사루만') {
        sendAlert(p);
        found = true;
      }
    }
  }
  return found;
}

export function findMiscreant(people) {
  return checkForMiscreants(people);
}

function sendAlert(p) {
  console.log(p);
}

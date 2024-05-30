function checkForMiscreants(people) {
  for (const p of people) {
    if (p === '조커') {
      sendAlert(p);
      return true;
    }
    if (p === '사루만') {
      sendAlert(p);
      return true;
    }
  }
  return false;
}

export function findMiscreant(people) {
  return checkForMiscreants(people);
}

function sendAlert(p) {
  console.log(p);
}

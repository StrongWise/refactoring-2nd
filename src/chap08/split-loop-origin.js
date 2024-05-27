export function findYoungestAgeAndCalculateTotalSalary(people) {
  let totalSalary = calculateTotalSalary(people);
  let youngest = findYoungestAge(people);
  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

function calculateTotalSalary(people) {
  let result = 0;
  for (const p of people) {
    result += p.salary;
  }
  return result;
}

function findYoungestAge(people) {
  let result = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < result) result = p.age;
  }
  return result;
}

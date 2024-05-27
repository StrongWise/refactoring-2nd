export function findYoungestAgeAndCalculateTotalSalary(people) {
  let totalSalary = calculateTotalSalary(people);
  let youngest = findYoungestAge(people);
  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

function calculateTotalSalary(people) {
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }
  return totalSalary;
}

function findYoungestAge(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
  return youngest;
}

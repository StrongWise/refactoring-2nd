export function findYoungestAgeAndCalculateTotalSalary(people) {
  return `youngestAge: ${(findYoungestAge(people))}, totalSalary: ${(calculateTotalSalary(people))}`;
}

function calculateTotalSalary(people) {
  return people.reduce((total, p) => total + p.salary, 0);
}

function findYoungestAge(people) {
  let result = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < result) result = p.age;
  }
  return result;
}

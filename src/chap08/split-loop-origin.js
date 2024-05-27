export function findYoungestAgeAndCalculateTotalSalary(people) {
  return `youngestAge: ${(findYoungestAge(people))}, totalSalary: ${(calculateTotalSalary(people))}`;
}

function calculateTotalSalary(people) {
  return people.reduce((total, p) => total + p.salary, 0);
}

function findYoungestAge(people) {
  return Math.min(...people.map(p => p.age));
}

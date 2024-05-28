export function charge(aDate, plan, quantity) {
  let charge;

  if (summer())
    charge = summerCharge();
  else
    charge = regularCharge();

  return charge;

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
  function summerCharge() {
    return quantity * plan.summerRate;
  }
  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }
}

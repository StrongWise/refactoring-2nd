export function charge(aDate, plan, quantity) {
  return summer() ? summerCharge() : regularCharge();

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

export function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) return 0;
  return 1;
  function isNotEligibleForDisability() {
    return (anEmployee.seniority < 2)
      || (anEmployee.monthsDisabled > 12)
      || (anEmployee.isPartTime);
  }
}

export function amount(anEmployee) {
  if (anEmployee.onVacation)
    if (anEmployee.seniority > 10)
      return 1;
  return 0.5;
}

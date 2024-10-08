export function charge(aDate, plan, quantity) {
	let charge;
	if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
		charge = quantity * plan.summerRate;
	else charge = quantity * plan.regularRate + plan.regularServiceCharge;
	return charge;
}

export function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}
export function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
}
export function raise(aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(1 + factor);
}

export function baseCharge(usage) {
	if (usage < 0) return usd(0);
	const amount =
		withinBand(usage, 0, 100) * 0.03
    + withinBand(usage, 100, 200) * 0.05
    + withinBand(usage, 200, Infinity) * 0.07;
	return usd(amount);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(amount) {
	return amount + ' $';
}

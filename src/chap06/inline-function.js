export function rating(aDriver) {
	return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

export function reportLines(aCustomer) {
	const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
	return lines;
}


export function rating(aDriver) {
	return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
	return aDriver.numberOfLateDeliveries > 5;
}

export function reportLines(aCustomer) {
	const lines = [];
	gatherCustomerData(lines, aCustomer);
	return lines;
}

function gatherCustomerData(out, aCustomer) {
	out.push(['name', aCustomer.name]);
	out.push(['location', aCustomer.location]);
}

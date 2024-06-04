const countryData = { shippingRules: ['Vessel'] };
const SUCCESS = 0;

class ShippingRules {
	constructor(data) {
		this._data = data;
	}
}

function localShippingRules(country) {
	const data = countryData.shippingRules[country];
	if (data) return new ShippingRules(data);
	else return -23;
}

function calculateShippingCosts(anOrder) {
	const shippingRules = localShippingRules(anOrder.country);
	if (shippingRules < 0) return shippingRules;
	return SUCCESS;
}

export function mainFunc(orderData) {
	const errorList = [];
	const status = calculateShippingCosts(orderData);
	if (status < 0) errorList.push({ order: orderData, errorCode: status });
  return status;
}

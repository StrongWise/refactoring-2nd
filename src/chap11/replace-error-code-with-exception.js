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
	else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
	const shippingRules = localShippingRules(anOrder.country);
	return SUCCESS;
}

export function mainFunc(orderData) {
	const errorList = [];
  let status;
  try {
	  status = calculateShippingCosts(orderData);
  } catch (e) {
    if (e instanceof OrderProcessingError) {
      errorList.push({ order: orderData, errorCode: status })
      status = e.code
    } else {
      throw e;
    }
  }
  return status;
}

export class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류: ${errorCode}`);
    this.code = errorCode;
  }

  get name() {return "OrderProcessingError";}
}

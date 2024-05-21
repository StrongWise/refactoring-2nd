export function simpleRecordEncapsulate(organization, newName) {
  let result = '';

  result += `<h1>${getOrganization().name}</h1>`; // 읽기 예
  getOrganization().name = newName; // 쓰기 예
  result += `<h1>${getOrganization().name}</h1>`;
  return result;

  function getOrganization() {
    return organization;
  }
}

export class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(aString) {
    this._name = aString;
  }

  get country() {
    return this._country;
  }

  set country(aString) {
    this._country = aString;
  }
}

export function nestedRecordEncapsulate(customerData, customerID, year, month, amount, laterYear) {
  let result = '';
  setRawDataOfCustomers(customerData);
  setUsage(customerID, year, month, amount); // 쓰기 예
  result += getRawDataOfCustomers()[customerID].usages[year][month];
  result += JSON.stringify(compareUsage(customerID, laterYear, month));
  return result;

  function compareUsage(customerID, laterYear, month) { // 읽기 예
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData._data;
  }
  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  }
	function setUsage(customerID, year, month, amount) {
		getRawDataOfCustomers()[customerID].usages[year][month] = amount;
	}
}

class CustomerData {
	constructor(data) {
		this._data = data;
	}
}

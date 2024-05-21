import _ from "lodash";

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

  getCustomerData().setUsage(customerID, year, month, amount); // 쓰기 예
  result += getCustomerData().usage(customerID, year, month);
  result += JSON.stringify(compareUsage(customerID, laterYear, month));
  return result;

  function compareUsage(customerID, laterYear, month) { // 읽기 예
    const later = getCustomerData().usage(customerID, laterYear, month);
    const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
    return { laterAmount: later, change: later - earlier };
  }
  function getCustomerData() {
    return customerData;
  }
  function getRawDataOfCustomers() {
    return customerData.rawData;
  }
  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  }
}

export class CustomerData {
	constructor(data) {
		this._data = data;
	}

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
	setUsage(customerID, year, month, amount) {
		this._data[customerID].usages[year][month] = amount;
	}
  get rawData() {
    return _.cloneDeep(this._data);
  }
}

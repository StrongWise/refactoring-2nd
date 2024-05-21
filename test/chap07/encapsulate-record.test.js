import {
  CustomerData,
  nestedRecordEncapsulate,
  Organization,
  simpleRecordEncapsulate
} from "../../src/chap07/encapsulate-record.js";
import {expect} from "chai";

describe('encapsulate-record', () => {
  it('simple record encapsulate', () => {
    const organization = new Organization({name: '애크미 구스베리', country: 'GB'});
    const newName = 'Acme Gooseberries';
    expect(simpleRecordEncapsulate(organization, newName)).equal('<h1>애크미 구스베리</h1><h1>Acme Gooseberries</h1>');
  });

  it('nested record encapsulate', () => {
    const customerData = {
      '1920': {
        name: 'martin',
        id: '1920',
        usages: {
          '2016': {
            '1': 50,
            '2': 55,
            // remaining months of the year
          },
          '2015': {
            '1': 70,
            '2': 63,
            // remaining months of the year
          },
        },
      },
      '38673': {
        name: 'neal',
        id: '38673',
      },
      // more customers in a similar form
    };

    let customerID = '1920';
    let year = '2015';
    let month = '1';
    let amount = 100;
    let laterYear = '2016';

    expect(nestedRecordEncapsulate(new CustomerData(customerData), customerID, year, month, amount, laterYear))
      .equal('100{"laterAmount":50,"change":-50}');
  });
});
